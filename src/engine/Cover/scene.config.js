/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as BABYLON from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials/grid";
import * as Exporter from "@babylonjs/serializers";
import { useFetch, attachImgToId } from "service";
import "@babylonjs/core/Meshes/meshBuilder";
import "@babylonjs/loaders";
const earcut = require("earcut");
window.earcut = earcut;
export default {
  _scene: null,
  _engine: null,
  canvas: null,
  data: null,
  marker: null,
  history: [],
  reverseHistory: [],
  actions: null,
  gridResolution: 1,
  selected: null,
  mod: {
    TRANSLATE: 0,
    ROTATE: 1,
    SCALE: 2,
    null: null,
  },
  shapes: [],
  plane: null,
  cylinder: [],
  BoardPoint: false,
  boardPoints: [],
  tempMesh: [],
  polygon: [],
  polygonPoint: [],
  box: [],
  objectUrl: null,
  db: null,
  emit: null,
  gizmo: null,
  activeMode: 0,
  coord: null,
  selectCallback: null,

  async init(scene, data, emit, toggle, select) {
    this.selectCallback = select;
    scene.collisionsEnabled = true;
    this.db = await this.getDb();
    this._scene = scene;
    this._engine = scene.getEngine();
    this.canvas = this._engine.getRenderingCanvas();
    this.objects = {};
    this._scene.activeCamera.beta = -(Math.PI / 2) * 180;
    this._scene.activeCamera.alpha = Math.PI / 2;
    this._scene.activeCamera.radius = 150;
    this.createCoordinates();
    this.createPlane();
    this.emit = emit;
    this.gizmo = new BABYLON.GizmoManager(scene);
    this.gizmo.boundingBoxGizmoEnabled = false;
    this.gizmo.attachableMeshes = [];
    this.gizmo.positionGizmoEnabled = true;
    this.gizmo.rotationGizmoEnabled = true;
    this.gizmo.scaleGizmoEnabled = true;
    this.gizmo.usePointerToAttachGizmos = false;
    this.gizmo.clearGizmoOnEmptyPointerEvent = true;
    this.gizmo.gizmos.positionGizmo.updateGizmoPositionToMatchAttachedMesh = true;
    this.gizmo.gizmos.rotationGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    this.gizmo.gizmos.scaleGizmo.updateGizmoPositionToMatchAttachedMesh = false;
    this.gizmo.gizmos.scaleGizmo.sensitivity = 80;
    this.gizmo.gizmos.scaleGizmo.scaleRatio = 1;
    this.gizmo.gizmos.positionGizmo.xGizmo.dragBehavior.onDragEndObservable.add(
      (obj) => {
        this.selectCallback(obj?.dragPlanePoint);
      }
    );
    this.gizmo.gizmos.positionGizmo.yGizmo.dragBehavior.onDragEndObservable.add(
      (obj) => {
        this.selectCallback(obj?.dragPlanePoint);
      }
    );
    this.gizmo.gizmos.positionGizmo.zGizmo.dragBehavior.onDragEndObservable.add(
      (obj) => {
        this.selectCallback(obj?.dragPlanePoint);
      }
    );
    this.activeMod(0);
  },
  async handleImport(engineData) {
    this._engine.displayLoadingUI();
    const decode = await attachImgToId(engineData.url, true, true);
    this._engine.hideLoadingUI();
    if (!decode) return;
    const raw_content = await BABYLON.Tools.DecodeBase64(decode.data);
    const blob = await new Blob([raw_content]);
    const BBJSurl = await URL.createObjectURL(blob);
    if (BBJSurl) {
      // BABYLON.SceneLoader.loggingLevel = BABYLON.SceneLoader.DETAILED_LOGGING;
      const meshes = (
        await BABYLON.SceneLoader.ImportMeshAsync(
          "",
          "",
          BBJSurl,
          this.scene,
          null,
          ".glb"
        )
      ).meshes;

      if (meshes.length === 0) {
        return;
      }
      this.shapes.push(meshes[0]);
      this.addActionOnMesh(meshes[0]);

      return meshes[0];
    }
  },
  setPlanePosition(e) {
    if (e === "y") {
      this.plane.rotation.x = 0;
    } else if (e === "x") {
      this.plane.rotation.x = Math.PI / 2;
    } else {
      this.plane.rotation.x = 0;
      this.plane.rotation.y = Math.PI / 2;
    }
  },
  async add(item) {
    return new Promise((resolve, reject) => {
      let trans = this.db.transaction(["Cover"], "readwrite");
      trans.oncomplete = (e) => {
        resolve();
      };
      let store = trans.objectStore("Cover");
      store.clear();
      store.add(item);
    });
  },
  async getDb() {
    return new Promise((resolve, reject) => {
      let request = window.indexedDB.open("IDEEZA COVER", 1);
      request.onerror = (e) => {
        console.log("Error opening db", e);
        reject("Error");
      };
      request.onsuccess = (e) => {
        resolve(e.target.result);
      };
      request.onupgradeneeded = (e) => {
        console.log("onupgradeneeded");
        let db = e.target.result;
        let objectStore = db.createObjectStore("Cover", {
          autoIncrement: true,
          keyPath: "id",
        });
      };
    });
  },
  async doDownload(filename) {
    let options = {
      shouldExportNode: (transformNode) => {
        console.log("Transform", transformNode);
        return (
          transformNode.name !== "light1" &&
          transformNode.name !== "pl" &&
          transformNode.name !== "TextPlane" &&
          transformNode.name !== "axisY" &&
          transformNode.name !== "axisZ" &&
          transformNode.name !== "plane" &&
          transformNode.name !== "default camera" &&
          transformNode.name !== "BackgroundHelper" &&
          transformNode.name !== "axisX"
        );
      },
    };
    let options2 = {
      shouldExportNode: (transformNode) => {
        console.log("Transform", transformNode);
        return (
          transformNode.name !== "light1" &&
          transformNode.name !== "pl" &&
          transformNode.name !== "TextPlane" &&
          transformNode.name !== "axisY" &&
          transformNode.name !== "axisZ" &&
          transformNode.name !== "plane" &&
          transformNode.name !== "default camera" &&
          transformNode.name !== "BackgroundHelper" &&
          transformNode.name !== "axisX" &&
          transformNode.isEnabled()
        );
      },
    };
    const glblob = await Exporter.GLTF2Export.GLBAsync(
      this._scene,
      "3dobject",
      options
    );
    const glblob2 = await Exporter.GLTF2Export.GLBAsync(
      this._scene,
      "3dobject",
      options2
    );
    let file = glblob.glTFFiles["3dobject.glb"];
    let blob = await this.blobTOb64({ blob: file });
    file = new File([blob], "test");
    let formData = new FormData();
    formData.append("file", file);
    let file2 = glblob2.glTFFiles["3dobject.glb"];
    let blob2 = await this.blobTOb64({ blob: file2 });
    file = new File([blob], "test");
    return { file, blob, grouped: blob2 };
  },
  async blobTOb64({ blob }) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    function x1() {
      return new Promise((resolve, reject) => {
        reader.onloadend = function () {
          let base64data = reader.result;
          resolve(base64data);
        };
      });
    }

    let base64 = await x1();
    return base64;
  },
  async saveUser() {
    const model = await this.doDownload();
    let url = null;
    let formData = new FormData();
    formData.append("file", model.file);
    await useFetch.post("/upload-files/", formData).then((response) => {
      url = response.data.file;
    });
    await this.add({ model });
    return url;
  },
  createPlane() {
    const _that = this;
    let groundMaterial = new GridMaterial("groundMaterial", this._scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 1;
    groundMaterial.gridRatio = this.gridResolution;
    groundMaterial.opacity = 0.5;
    groundMaterial.mainColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    groundMaterial.lineColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    groundMaterial.backFaceCulling = false;
    groundMaterial.position = new BABYLON.Vector3(0, 0, 0);
    const grid = BABYLON.Mesh.CreatePlane("plane", 100, this._scene);
    grid.checkCollisions = true;
    grid.rotation.x = Math.PI / 2;
    grid.material = groundMaterial;
    grid.isPickable = true;
    grid.actionManager = new BABYLON.ActionManager(this._scene);
    grid.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        async (evt) => {
          _that.setSelected(null);
          this.changeMode("translate");
        }
      )
    );
    this.plane = grid;
    this.shapes.push(grid);
  },
  changeMode(mode) {
    let mod = mode.toUpperCase();
    this.activeMode = this.mod[mod];
    this.activeMod(this.activeMode);
    if (mode === "translate") {
      this.actions = null;
    }
  },
  activeMod(mod) {
    switch (mod) {
      case 0:
        this.gizmo.positionGizmoEnabled = true;
        this.gizmo.rotationGizmoEnabled = false;
        this.gizmo.scaleGizmoEnabled = false;
        break;
      case 1:
        this.gizmo.positionGizmoEnabled = false;
        this.gizmo.rotationGizmoEnabled = true;
        this.gizmo.scaleGizmoEnabled = false;
        break;
      case 2:
        this.gizmo.positionGizmoEnabled = false;
        this.gizmo.rotationGizmoEnabled = false;
        this.gizmo.scaleGizmoEnabled = true;
        break;
      case -1:
        this.gizmo.positionGizmoEnabled = false;
        this.gizmo.rotationGizmoEnabled = false;
        this.gizmo.scaleGizmoEnabled = false;
        break;
    }
  },
  createCoordinates() {
    const size = 20;
    var axisX = BABYLON.Mesh.CreateLines(
      "axisX",
      [
        new BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, -0.05 * size, 0),
      ],
      this._scene
    );
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = this.makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = BABYLON.Mesh.CreateLines(
      "axisY",
      [
        new BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(0.05 * size, size * 0.95, 0),
      ],
      this._scene
    );
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = this.makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = BABYLON.Mesh.CreateLines(
      "axisZ",
      [
        new BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, 0.05 * size, size * 0.95),
      ],
      this._scene
    );
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = this.makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
    this.coord = {
      X: {
        axis: axisX,
        text: xChar,
      },
      Y: {
        axis: axisY,
        text: yChar,
      },
      Z: {
        axis: axisZ,
        text: zChar,
      },
    };
  },
  toggleCoord() {
    this.coord?.X?.axis?.setEnabled(!this.coord?.X?.axis?.isEnabled());
    this.coord?.X?.text?.setEnabled(!this.coord?.X?.text?.isEnabled());
    this.coord?.Y?.axis?.setEnabled(!this.coord?.Y?.axis?.isEnabled());
    this.coord?.Y?.text?.setEnabled(!this.coord?.Y?.text?.isEnabled());
    this.coord?.Z?.axis?.setEnabled(!this.coord?.Z?.axis?.isEnabled());
    this.coord?.Z?.text?.setEnabled(!this.coord?.Z?.text?.isEnabled());
  },
  makeTextPlane(text, color, size) {
    var dynamicTexture = new BABYLON.DynamicTexture(
      "DynamicTexture",
      50,
      this.scene,
      true
    );
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(
      text,
      5,
      40,
      "bold 36px Arial",
      color,
      "transparent",
      true
    );
    var plane = new BABYLON.Mesh.CreatePlane(
      "TextPlane",
      size,
      this.scene,
      true
    );
    plane.material = new BABYLON.StandardMaterial(
      "TextPlaneMaterial",
      this.scene
    );
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
  },
  undo() {
    if (this.history[this.history.length - 1].type === "Action") {
      this.history[this.history.length - 1].mesh.setEnabled(false);
      this.history[this.history.length - 1].meshes[0].setEnabled(true);
      this.history[this.history.length - 1].meshes[1].setEnabled(true);
    } else if (this.history[this.history.length - 1].type === "Shape") {
      this.history[this.history.length - 1].mesh.setEnabled(false);
    }
    this.reverseHistory.push(this.history[this.history.length - 1]);
    delete this.history[this.history.length - 1];
    this.history = this.history.filter(
      (val) => val !== null && val !== undefined
    );
  },
  redo() {
    if (this.reverseHistory[this.reverseHistory.length - 1].type === "Action") {
      this.reverseHistory[this.reverseHistory.length - 1].mesh.dispose(
        false,
        true
      );
      this.reverseHistory[this.reverseHistory.length - 1].meshes[0].setEnabled(
        true
      );
      this.reverseHistory[this.reverseHistory.length - 1].meshes[1].setEnabled(
        true
      );
    } else if (
      this.reverseHistory[this.reverseHistory.length - 1].type === "Shape"
    ) {
      this.reverseHistory[this.reverseHistory.length - 1].mesh.dispose(true);
    }
    delete this.reverseHistory[this.reverseHistory.length - 1];
    this.reverseHistory = this.reverseHistory.filter(
      (val) => val !== null && val !== undefined
    );
  },
  createSquare() {
    var box = BABYLON.MeshBuilder.CreateBox(
      `Box ${this.box.length + 1}`,
      {
        width: 10,
        height: 10,
        depth: 0.1,
      },
      this._scene
    ); // default box
    box.position = new BABYLON.Vector3(0, 0, 0);
    box.rotate(BABYLON.Axis.X, -Math.PI / 2, BABYLON.Space.WORLD);
    this.addActionOnMesh(box);
    box.type = "Box";
    this.box.push(box);
    this.shapes.push(box);
    this.history.push({ type: "Shape", mesh: box, name: "Box Created" });
    return box;
  },
  setAction(e) {
    this.actions = e;
  },
  changeColor(e) {
    if (this.selected) {
      let material = new BABYLON.StandardMaterial("material", this._scene);
      // material.freeze();
      material.emissiveColor = new BABYLON.Color3.FromHexString(e);
      material.diffuseColor = BABYLON.Color3.FromHexString(e);
      material.specularColor = BABYLON.Color3.FromHexString(e);
      this.selected.material = material;
    }
  },
  createCylinder() {
    let cylinder = BABYLON.MeshBuilder.CreateCylinder(
      `Cylinder ${this.cylinder.length + 1}`,
      { diameter: 10, tessellation: 1000, height: 0.1 },
      this._scene
    ); // default box
    cylinder.position = new BABYLON.Vector3(0, 0, 0);
    this.addActionOnMesh(cylinder);
    cylinder.scaling.y = 0.1;
    cylinder.rotation = new BABYLON.Vector3(
      0,
      this.plane.rotation.y,
      this.plane.rotation.z
    );
    cylinder.type = "Cylinder";
    this.setSelected(cylinder);
    this.shapes.push(cylinder);
    this.history.push({
      type: "Shape",
      mesh: cylinder,
      name: "Cylinder Created",
    });
    this.cylinder.push(cylinder);
    return cylinder;
  },
  copyMesh() {
    if (this.selected) {
      if (this.selected?.type === "Cylinder") {
        let cylinder = this.selected.clone(this.selected?.name + " 2");
        cylinder.position = new BABYLON.Vector3(0, 0, 0);
        this.addActionOnMesh(cylinder);
        cylinder.scaling.y = 0.1;

        cylinder.type = "Cylinder";
        this.setSelected(cylinder);
        this.shapes.push(cylinder);
        this.history.push({
          type: "Shape",
          mesh: cylinder,
          name: "Cylinder Created",
        });
      } else {
        let box = this.selected.clone(this.selected?.name + " 2");
        box.position = new BABYLON.Vector3(0, 0, 0);
        this.addActionOnMesh(box);
        box.type = "Box";
        this.box.push(box);
        this.shapes.push(box);
        this.history.push({ type: "Shape", mesh: box, name: "Box Created" });
        return box;
      }
    }
  },
  createHoles(mesh2, mesh1) {
    const name = mesh1.name;
    const material = mesh2.material;
    const innerCSG = BABYLON.CSG.FromMesh(mesh2);
    const outerCSG = BABYLON.CSG.FromMesh(mesh1);
    let subCSG;
    if (this.actions === "substract") subCSG = outerCSG.subtract(innerCSG);
    else if (this.actions === "union") subCSG = outerCSG.union(innerCSG);
    else if (this.actions === "intersection")
      subCSG = outerCSG.intersect(innerCSG);
    this._scene.removeMesh(innerCSG);
    this._scene.removeMesh(outerCSG);
    const newmesh = subCSG.toMesh(name, material, this._scene);
    this._scene.removeMesh(subCSG);
    this.history.push({
      id: BABYLON.Tools.RandomId(),
      mesh: newmesh,
      name: `${this.actions} Action Performed!`,
      type: "Action",
      meshes: [mesh2, mesh1],
    });
    mesh1.setEnabled(false);
    mesh2.setEnabled(false);
    this.actions = null;
    return newmesh;
  },
  mergeShape(mesh) {
    let newMesh = this.createHoles(mesh, this.selected);
    this.addActionOnMesh(newMesh);
  },
  addActionOnMesh(mesh) {
    const _this = this;
    let material = new BABYLON.StandardMaterial("material", this._scene);
    material.emissiveColor = new BABYLON.Color3.FromHexString("#333333");
    mesh.checkCollisions = true;
    let Mesh = mesh;
    Mesh.actionManager = new BABYLON.ActionManager(this._scene);
    Mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        async (evt) => {
          if (_this.actions !== null) {
            await _this.mergeShape(evt.source);
            _this.selected = null;
          }
          {
            _this.setSelected(evt.source);
          }
        }
      )
    );
  },
  fullScreen() {
    var el = document.getElementById("engine");
    el.requestFullscreen();
  },
  //
  setSelected(mesh) {
    console.log("Mesh", mesh);
    this.selected = mesh;
    this.gizmo.attachToMesh(mesh);
    this.selectCallback(mesh?.position);
  },
  //Find Position From Ground
  getGroundPosition(evt) {
    const _that = this;
    let pickinfo = _that._scene.pick(
      _that._scene.pointerX,
      _that._scene.pointerY,
      function (mesh) {
        return mesh;
      }
    );
    if (pickinfo.hit) {
      const x = _that.snapToGrip(parseFloat(pickinfo.pickedPoint.x));
      const z = _that.snapToGrip(parseFloat(pickinfo.pickedPoint.z));
      return new BABYLON.Vector3(x, 0, z);
    }
    if (evt) {
      if (evt.source.getAbsolutePosition) {
        const pickinfo = evt.source.getAbsolutePosition();
        const x = _that.snapToGrip(parseFloat(pickinfo.x));
        const z = _that.snapToGrip(parseFloat(pickinfo.z));
        return new BABYLON.Vector3(x, 0, z);
      }
    }
    return null;
  },
  //Find Snap Of Grid
  snapToGrip(val) {
    return parseFloat(
      (this.gridResolution * Math.round(val / this.gridResolution)).toFixed(2)
    );
  },
  disposeEngine() {
    this._scene = null;
    this._engine = null;
    this.canvas = null;
    this.data = null;
    this.marker = null;
    this.history = [];
    this.reverseHistory = [];
    this.actions = null;
    this.gridResolution = 1;
    this.selected = null;
    this.mod = {
      TRANSLATE: 0,
      ROTATE: 1,
      SCALE: 2,
      null: null,
    };
    this.shapes = [];
    this.plane = null;
    this.cylinder = [];
    this.BoardPoint = false;
    this.boardPoints = [];
    this.tempMesh = [];
    this.polygon = [];
    this.polygonPoint = [];
    this.box = [];
    this.objectUrl = null;
    this.db = null;
    this.emit = null;
    if (this._scene) {
      for (let i = this._scene.meshes.length - 1; i >= 0; i--) {
        if (this._scene.meshes[i]) {
          this._scene.meshes[i].dispose(false, true);
        }
      }
      this._scene.dispose();
      delete this._scene;
    }

    if (this._engine) {
      this._engine.stopRenderLoop();
      this._engine.clear(BABYLON.Color3.White(), true, true, true);
      this._engine.dispose();
      delete this._engine;
    }
    delete this;
  },
};
