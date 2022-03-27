/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as BABYLON from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials/grid";
import { attachImgToId, getDb } from "service";
import { v4 as uuidv4 } from "uuid";
import * as GUI from "@babylonjs/gui";
import * as Exporter from "@babylonjs/serializers";
import { useFetch } from "service";
import "@babylonjs/core/Meshes/meshBuilder";
import "@babylonjs/loaders";
const earcut = require("earcut");
window.earcut = earcut;
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
  if (
    document.getElementById("customLoadingScreenDiv") &&
    document.getElementById("customLoadingScreenDiv").style
  ) {
    // Do not add a loading screen if there is already one
    document.getElementById("customLoadingScreenDiv").style.display = "flex";
    return;
  }
  this._loadingDiv = document.createElement("div");
  this._loadingDiv.id = "customLoadingScreenDiv";
  this._loadingDiv.innerHTML =
    "<img src='https://i.imgur.com/dtiCp3V.gif' style='width:200px;height:200px'  />";
  this._resizeLoadingUI();
  document.getElementById("engine").appendChild(this._loadingDiv);
};

BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function () {
  if (
    document.getElementById("customLoadingScreenDiv") &&
    document.getElementById("customLoadingScreenDiv")?.style
  ) {
    document.getElementById("customLoadingScreenDiv").style.display = "none";
  }
};
export default {
  x: null,
  data: {
    assets: [],
    connection: [],
  },
  scene: null,
  _engine: null,
  canvas: null,
  gridRatio: 0.1,
  selectedLayer: 3,
  selectedOption: 0,
  gridResolution: 0.2,
  lastPositionWiring: null,
  activePins: [],
  onPointerObservable: null,
  activeConnection: null,
  activePin: null,
  auxline2: null,
  auxline: null,
  connection: [],
  nets: [],
  boardPoints: [],
  resolution: [20, 20],
  wireWidth: 0.15,
  shape: [],
  selectedNet: null,
  view: "2d",
  pcb: null,
  Mesh2D: [],
  Mesh3D: [],
  Plane: null,
  Hole: [],
  block: false,
  options: [
    "move",
    "route",
    "rotate",
    "delete",
    "copy",
    "mirror",
    "hole",
    "subgrouping",
    "connections",
    "unroute",
    "polygon",
  ],
  LayerMesh: [],
  db: null,
  Layer: [
    {
      name: "Bottom Layer Mask",
      color: "#19b519",
      connection: null,
      size: 0.01,
      wireColor: "#800000",
      type: "Mask",
      position: "bottom",
    },
    {
      name: "Bottom Layer",
      color: "#b87333",
      connection: "GND",
      size: 0.035,
      wireColor: "#0000FF",
      type: "Layer",
      position: "bottom",
    },
    {
      name: "Core",
      color: "#333333",
      connection: null,
      size: 0.1,
      wireColor: null,
      type: "Prepreg",
      position: "center",
    },
    {
      name: "Top Layer",
      color: "#b87333",
      connection: "GND",
      size: 0.035,
      wireColor: "#800000",
      type: "Layer",
      position: "top",
    },
    {
      name: "Top Layer Mask",
      color: "#19b519",
      connection: null,
      size: 0.01,
      wireColor: "#800000",
      type: "Mask",
      position: "top",
    },
  ],
  board: null,
  check: false,
  async doDownload(filename) {
    let options = {
      shouldExportNode: (transformNode) => {
        return (
          transformNode.name !== "light1" &&
          transformNode.name !== "default camera" &&
          transformNode.name !== "BackgroundHelper"
        );
      },
    };
    const glblob = await Exporter.GLTF2Export.GLBAsync(
      this.scene,
      "3dobject",
      options
    );
    let file = glblob.glTFFiles["3dobject.glb"];
    let blob = await this.blobTOb64({ blob: file });
    file = new File([blob], "model");
    let formData = new FormData();
    formData.append("file", file);

    return { file, blob };
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
  //INITIALIZE ENGINE USING SCENE AND DATA
  async init(scene, data, check, toggle) {
    this.db = await getDb();
    this.check = check;
    scene.blockMaterialDirtyMechanism = true;
    this.shape = [
      new BABYLON.Vector3(-this.resolution[0], 0, -this.resolution[1]),
      new BABYLON.Vector3(this.resolution[0], 0, -this.resolution[1]),
      new BABYLON.Vector3(this.resolution[0], 0, this.resolution[1]),
      new BABYLON.Vector3(-this.resolution[0], 0, this.resolution[1]),
    ];
    const _that = this;
    this.scene = scene;
    this._engine = scene.getEngine();
    this._engine.resize();
    this.canvas = this._engine.getRenderingCanvas();
    this.scene.clearColor = new BABYLON.Color3.FromHexString("#525252");
    this.scene.actionManager = new BABYLON.ActionManager(this.scene);
    this.scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnEveryFrameTrigger,
        async (evt) => {
          if (_that.selectedOption !== 1 && _that.selectedOption !== 8) {
            return;
          }
          if (this.block) {
            return;
          }
          if (_that.lastPositionWiring !== null) {
            await _that.lineDraw(evt);
          }
        }
      )
    );
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    GUI.Button.CreateMyCustomButton = function (
      name,
      text,
      imageUrl,
      imgWidth = "65px",
      eWidth = "80px",
      color = "white"
    ) {
      var result = new GUI.Button(name);
      var ellipse1 = new GUI.Rectangle();
      result.zIndex = 1000;
      ellipse1.width = eWidth;
      ellipse1.height = eWidth;
      ellipse1.color = "white";
      ellipse1.cornerRadius = 10;
      ellipse1.shadowColor = "#00000050";
      ellipse1.shadowBlur = 10;
      ellipse1.thickness = 0;
      ellipse1.background = color;

      // Adding image
      var iconImage = new GUI.Image(name + "_icon", imageUrl);
      iconImage.width = imgWidth;
      iconImage.stretch = GUI.Image.STRETCH_UNIFORM;
      iconImage.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      iconImage.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      result.addControl(ellipse1);
      result.addControl(iconImage);
      result.background = "transparent";
      result.thickness = 0;
      return result;
    };
    if (!check) {
      var button1 = GUI.Button.CreateMyCustomButton(
        "Image",
        "",
        "/assets/bar-icon.png"
      );
      button1.width = "100px";
      button1.height = "100px";
      button1.onPointerUpObservable.add(function () {
        toggle();
      });
      button1.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
      button1.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      advancedTexture.addControl(button1);
    }
    var button2 = GUI.Button.CreateMyCustomButton(
      "Screen",
      "",
      "/assets/images/expand.png",
      "25px",
      "35px",
      "transparent"
    );
    button2.width = "50px";
    button2.height = "50px";

    button2.onPointerUpObservable.add(function () {
      var el = document.getElementById("engine");
      el.requestFullscreen();
    });
    button2.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    button2.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    advancedTexture.addControl(button2);
    if (data.assets) {
      this.importParts(data);
    }
    if (data.connections) {
      this.connection = data.connections;
    }
    if (data.net) {
      this.nets = data.net;
    }
    const that = this;
    window.addEventListener(
      "keydown",
      function (e) {
        if (e?.key === "Control") {
          that.block = true;
        }
      },
      false
    );
    window.addEventListener(
      "keyup",
      function (e) {
        if (e?.key == "Control") {
          that.block = false;
        }
      },
      false
    );
    // this.db = await getDb();
    this.addBoard();
  },
  importRuntime(data) {
    if (data.reuse) {
      if (data && data.net) this.nets = this.nets.concat(data.net);
    }
    if (data && data.assets) {
      this.importParts(data);
    }
  },
  createPCB() {
    var y = 0.0;
    if (this.pcb) {
      this.LayerMesh = [];
      this.pcb.dispose(false, true);
    }

    const root = new BABYLON.TransformNode("PCB", this.scene);
    let firstFlag = false;
    let layerFlag = false;
    this.Layer.map((v) => {
      y = y + v.size;
      let boardProperties = {
        shape: this.shape,
        depth: v.size,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      };
      const material = new BABYLON.StandardMaterial("material1", this.scene);
      material.majorUnitFrequency = 1;
      material.zOffset = 1;
      material.diffuseColor = BABYLON.Color3.FromHexString(v.color);
      material.specularColor = BABYLON.Color3.FromHexString(v.color);
      material.emissiveColor = BABYLON.Color3.FromHexString(v.color);
      material.ambientColor = BABYLON.Color3.FromHexString(v.color);
      this.Hole.map((val, k) => {
        if (
          v.name === val.name ||
          (v.name === "Bottom Layer Mask" && val.name === "Bottom Layer")
        ) {
          if (!firstFlag) {
            let hollow = this.createHoleOnPcb(val.height, val.position, k);
          }
        }
      });
      this.Hole.map((val, k) => {
        if (v.name === "Bottom Layer Mask" && val.name === "Bottom Layer") {
          layerFlag = true;
        } else if (v.name === val.name) {
          layerFlag = true;
        }
        if (layerFlag) {
          let hole = this.Hole.filter((v) => v.hole);

          hole = hole.map((v) => v.hole);
          boardProperties.holes = hole;
        }
      });
      let board = BABYLON.MeshBuilder.ExtrudePolygon(
        v.name,
        boardProperties,
        this.scene
      );
      board.material = material;
      board.position.y = y;
      board.metadata = v;
      board.color = v.color;
      y = y + v.size;
      this.LayerMesh.push(board);
    });
    this.LayerMesh.map((v) => (v.parent = root));
    this.pcb = root;
  },

  //Adding PCB Board
  addBoard() {
    if (this.board) {
      this.board.dispose();
    }
    let boardProperties = {
      shape: this.shape,
      depth: this.depthPCB,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
    };
    let board = BABYLON.MeshBuilder.CreatePolygon(
      "PCB",
      boardProperties,
      this.scene
    );
    board.freezeNormals();
    board.checkCollisions = true;
    board.material = new GridMaterial("material1", this.scene);
    board.material.majorUnitFrequency = 1;
    board.material.zOffset = 1;
    board.material.gridRatio = this.gridRatio;
    board.material.mainColor = BABYLON.Color3.FromHexString("#333333");
    board.material.lineColor = BABYLON.Color3.FromHexString("#636363");
    board.position.y = 0.01;
    this.board = board;
    this.setBoardActions(this.board);
    return;
  },
  toggleGrid() {
    return this.board.setEnabled(!this.board.isEnabled());
  },
  async setBoardActions(board) {
    const _this = this;
    board.actionManager = new BABYLON.ActionManager(this.scene);
    board.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        (evt) => {
          let pickInfo = _this.scene.pick(
            _this.scene.pointerX,
            _this.scene.pointerY,
            function (mesh) {
              return mesh === _this.board;
            }
          );
          if (_this.selectedOption === 6) {
            _this.createHoles(pickInfo.pickedPoint);
          }
          if (_this.selectedOption !== 1 && _this.selectedOption !== 8) {
            return;
          }
          if (_this.lastPositionWiring !== null) {
            if (_this.auxline !== null) {
              _this.auxline.dispose(false, true);
              _this.auxline = null;
            }

            if (_this.selectedOption === 1) {
              const point = _this.getGroundPosition();
              let wire = _this.createLine2Points(
                _this.lastPositionWiring,
                point
              );
              wire.routeId = this.tempNet.routing[0].id;
              let poly = _this.jucntionPoint(point);
              _this.lastPositionWiring = point;
              _this.tempNet.routing[0].route.push(point);
              _this.tempNet.routing[0].Points.push(poly);
              _this.tempNet.routing[0].wires.push(wire);
            }
          }
        }
      )
    );
  },
  //Importing Assets From Scehmatic Object
  async importParts(data) {
    const assets = data.assets;
    if (assets.length === 0) {
      return;
    }
    // this._engine.displayLoadingUI();
    for (let i = 0; i < assets.length; i++) {
      let obj = assets[i];
      // if (assets[i].partID) {
      //   obj = {
      //     ...obj,
      //     partID: assets[i].partID,
      //     index: this.data.assets.length + 1,
      //   };
      // } else {
      //   obj = {
      //     ...obj,
      //     partID: uuidv4(),
      //     index: this.data.assets.length + 1,
      //   };
      // }
      let data = Object.assign([], this.data.assets);
      data.push(obj);
      this.data.assets = data;
      let mesh = await this.handleImport(obj);
      this.Mesh2D.push(mesh);
    }
    this.connection = data.connections;
    await this.refectorNetwork();
    this.Mesh2D.map((v) => {
      this.updateConectionPinPosition(v);
      this.updateWireOnMeshPin(v);
    });
    if (this.check) {
      await this.toggleView();
    }

    // this._engine.hideLoadingUI();
  },
  //Toggle View In Form Of 2D/3D
  async toggleView() {
    this.view = this.view === "2d" ? "3d" : "2d";
    if (this.view === "2d") {
      this.Mesh2D.map((v) => (v.position.y = 0.01));
      this.board.setEnabled(true);
      this.pcb.setEnabled(false);
      this.scene.activeCamera.beta = 0;
      this.scene.activeCamera.radius = 30;
      this.scene.activeCamera.minZ = 0;
      this.scene.activeCamera.lowerRadiusLimit = 1;
      this.scene.activeCamera.allowUpsideDown = true;
      this.scene.activeCamera.noRotationConstraint = true;
      this.scene.activeCamera.upperBetaLimit = this.scene.activeCamera.lowerBetaLimit = this.scene.activeCamera.beta;
      this.scene.activeCamera.wheelPrecision = 30;
      this.scene.activeCamera.panningSensibility = 47;
      this.scene.activeCamera.panningInertia = 0;
      this.Mesh3D.map((v) => v.dispose());
    } else {
      await this.createPCB();
      this.nets.map((v) =>
        v.routing.map((val) => {
          const mesh = this.LayerMesh.find((v) => v.name === val.Layer.name);
          let height = this.calculateLayerSum();
          const wires = val.ParentWire.getChildTransformNodes().filter(
            (v) => v.name === "wires"
          );
          const points = val.ParentWire.getChildTransformNodes().filter(
            (v) => v.name === "point"
          );
          wires.map((v, k) => {
            v.position.y = mesh.position.y + 0.03;
            v.material.diffuseColor = BABYLON.Color3.FromHexString("#DAA520");
            v.material.emissiveColor = BABYLON.Color3.FromHexString("#DAA520");
            v.material.specularColor = BABYLON.Color3.FromHexString("#DAA520");
            if (k === 0 || k === wires.length - 1) {
              if (mesh.name !== "Top Layer") {
                v.position.y = this.lastLayerPosition().position.y;
                v.scaling.x = v.scaling.x - 0.33;
              }
            } else {
              if (mesh.name === "Bottom Layer") {
                v.rotation.x = (Math.PI * 3) / 2;
                v.position.y = -0.02;
              } else if (mesh.name !== "Top Layer") {
                v.setEnabled(false);
              }
            }
          });
          points.map((v, k) => {
            v.position.y = mesh.position.y + 0.05;
            v.material.diffuseColor = BABYLON.Color3.FromHexString("#DAA520");
            v.material.emissiveColor = BABYLON.Color3.FromHexString("#DAA520");
            v.material.specularColor = BABYLON.Color3.FromHexString("#DAA520");
            if (mesh.name !== "Top Layer") {
              v.setEnabled(false);
              if (k === 0 || points.length - 1 === k) {
                this.Hole.push({
                  position: v.position,
                  height,
                  name: mesh.name,
                });
              }
              if (mesh.name === "Bottom Layer") {
                v.setEnabled(true);
                v.position.y = -0.02;
              }
            } else {
              v.position.y = this.lastLayerPosition().position.y;
            }
          });
        })
      );
      const total = this.lastLayerPosition();
      this.Mesh2D.map((v) => (v.position.y = total.position.y));
      this.board.setEnabled(false);
      this.scene.clearColor = BABYLON.Color3.White();
      this.scene.activeCamera.beta = 1.5724068403303726;
      this.scene.activeCamera.radius = 33.07464416757011;
      this.scene.activeCamera.minZ = 0.01;
      this.scene.activeCamera.lowerRadiusLimit = 0.01;
      this.scene.activeCamera.allowUpsideDown = true;
      this.scene.activeCamera.noRotationConstraint = false;
      this.scene.activeCamera.upperBetaLimit = null;
      this.scene.activeCamera.lowerBetaLimit = null;
      this.scene.activeCamera.wheelPrecision = 100;
      this.scene.activeCamera.panningSensibility = 1000;
      this.scene.activeCamera.panningInertia = 0.9;
      await this.createPCB();

      this.data.assets.map(async (v) => {
        let mesh = await this.handleImport3dModel(v);
        this.Mesh3D.push(mesh);
      });
    }
  },
  //Handle Importing Part
  async handleImport(engineData) {
    const decode = await attachImgToId(engineData.design, true, true);
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
      meshes[0].metadata = {
        engineData: engineData,
      };
      meshes[0].position = new BABYLON.Vector3(
        engineData.transform.position[0],
        engineData.transform.position[1],
        engineData.transform.position[2]
      );
      meshes[0].rotation = new BABYLON.Vector3(
        engineData.transform.rotation[0],
        engineData.transform.rotation[1],
        engineData.transform.rotation[2]
      );
      meshes[0].body = null;
      meshes[0].pins = [];
      meshes[0].nick = null;
      meshes[0].type = "2d";
      for (let i = 0; i < meshes.length; i++) {
        if (meshes[i].name.toLowerCase().indexOf("dn_body") !== -1) {
          meshes[0].body = meshes[i];
        } else {
          if (meshes[i].name.toLowerCase().indexOf("dn_pin") !== -1) {
            meshes[0].pins.push(meshes[i]);
            this.setPinsOfParts(meshes[i], engineData.partID);
          } else {
            if (meshes[i].name.toLowerCase().indexOf("dn_name") !== -1) {
              meshes[0].nick = meshes[i];
              meshes[0].nick.isPickable = false;
            }
          }
        }
      }
      if (meshes[0].body) {
        // meshes[0].Index = this.generateNetworkId({
        //   metadata: {
        //     indexPart: engineData.index,
        //   },
        // });
        await this.setBodyOfMesh(meshes[0]);
      }
      meshes[0].position.y = 0.01;
      if (engineData.netID) {
        meshes[0].netID = engineData.netID;
      }

      return meshes[0];
    }
  },
  //Set Pin/Legs Of Parts
  setPinsOfParts(pin, index) {
    const _this = this;
    const split = pin.name.split("_");
    const scPiNnEEDIncrement = parseInt(split[split.length - 1].trim());
    pin.metadata = {
      indexPin: scPiNnEEDIncrement,
      indexPart: index,
    };
    pin.isPickable = true;
    pin.material.albedoColor = BABYLON.Color3.Purple();
    pin.actionManager = new BABYLON.ActionManager(this.scene);
    pin.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnLeftPickTrigger,
        () => {
          if (_this.selectedOption !== 1 && this.selectedOption !== 8) return;
          _this.togglePinConnection(pin);
        }
      )
    );
    pin.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPointerOverTrigger,
        () => {
          _this.togglePinIndex(pin, true);
        }
      )
    );
    pin.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPointerOutTrigger,
        () => {
          _this.togglePinIndex(pin, false);
        }
      )
    );
    return pin;
  },
  //Set Functionality On Body Of Part On Import
  setBodyOfMesh(mesh) {
    const main = mesh;
    const Body = main.body;
    const _this = this;
    Body.actionManager = new BABYLON.ActionManager(this.scene);
    Body.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickDownTrigger,
        async (evt) => {
          const _evt = evt;
          const _thism = evt.source.parent.parent;
          if (evt.sourceEvent.button === 0) {
            switch (_this.selectedOption) {
              //Make Component Moveable
              case 0: {
                let startingPoint = _this.getGroundPosition();
                if (!_this._observer) {
                  _this._observer = await _this.scene.onPointerObservable.add(
                    (evt) => {
                      if (!startingPoint) return;
                      let current = _this.getGroundPosition();
                      if (!current) return;
                      let diff = current.subtract(startingPoint);
                      _thism.position.addInPlace(diff);
                      startingPoint = current;
                      _this.updateConectionPinPosition(_thism);
                      _this.updateWireOnMeshPin(_thism);
                    },
                    BABYLON.PointerEventTypes.POINTERMOVE
                  );
                  _this.scene.activeCamera.detachControl(_this.canvas);
                }
                break;
              }
              case 2: {
                _thism.rotation.y += Math.PI / 2;
                setTimeout(() => {
                  _this.updateWireOnMeshPin(_thism);
                  _this.updateConectionPinPosition(_thism);
                }, 100);
                break;
              }
              case 3: {
                _this.deletePartWithWires(_thism);
                break;
              }
              case 4: {
                let metadata = Object.assign({}, _thism.metadata.engineData);
                let index = this.data.assets.length;
                metadata = {
                  ...metadata,
                  transform: {
                    ...metadata.transform,
                    position: [
                      metadata.transform.position[0],
                      metadata.transform.position[1],
                      metadata.transform.position[2] + 10,
                    ],
                  },
                  index: index,
                };
                this.data.assets.push(metadata);
                this.handleImport(metadata);
                break;
              }
              default: {
                return;
              }
            }
          }
        }
      )
    );
    Body.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickUpTrigger,
        (evt) => {
          const _thism = evt.source.parent.parent;

          if (evt.sourceEvent.button === 0) {
            if (_this.selectedOption === 0) {
              // if it is outside of part keep link it on mouse
              _this.scene.onPointerObservable.remove(_this._observer);
              _this._observer = null;
              _this.scene.activeCamera.attachControl(_this.canvas, false);
              _thism.metadata.engineData.transform.position = [
                _thism.position.x,
                _thism.position.y,
                _thism.position.z,
              ];

              _this.data.assets[
                _thism.metadata.engineData.index
              ].transform.position = [
                _thism.position.x,
                _thism.position.y,
                _thism.position.z,
              ];
              if (name.indexOf("Layer") !== -1) {
                return;
              }
            }
          }
        }
      )
    );
  },
  //Import 3D Model from Exisiting 2D Model
  async handleImport3dModel(engineData) {
    this._engine.displayLoadingUI();
    const decode = await attachImgToId(engineData.url, true, true);
    if (!decode) return;
    const raw_content = BABYLON.Tools.DecodeBase64(decode.data);
    const blob = new Blob([raw_content]);
    const BBJSurl = URL.createObjectURL(blob);
    const root = new BABYLON.TransformNode("3DParent", this.scene);
    if (BBJSurl) {
      BABYLON.SceneLoader.loggingLevel = BABYLON.SceneLoader.DETAILED_LOGGING;
      let meshes = (
        await BABYLON.SceneLoader.ImportMeshAsync(
          "",
          "",
          BBJSurl,
          this.scene,
          null,
          ".glb"
        )
      ).meshes;
      let height =
        this.lastLayerPosition().position.y +
        meshes[meshes.length - 1].scaling.y -
        0.9;
      meshes[0].metadata = { engineData };
      if (meshes.length === 0) {
        return;
      }
      meshes[0].position = new BABYLON.Vector3(
        engineData.transform.position[0],
        height,
        engineData.transform.position[2]
      );
      meshes[0].rotation = new BABYLON.Vector3(
        engineData.transform.rotation[0],
        engineData.transform.rotation[1],
        engineData.transform.rotation[2]
      );
      root.position = new BABYLON.Vector3(
        engineData.transform.position[0],
        height,
        engineData.transform.position[2]
      );
      meshes[0].setParent(root);
      this._engine.hideLoadingUI();
      return meshes[0];
    }
  },
  //Make Pin Number Visiblity Toggle on Hover
  togglePinIndex(pin, visible) {
    const scene = this.scene;
    const split = pin.name.split("_");
    let pinIndex = split[split.length - 1];

    if (visible) {
      const dynamicTexture = new BABYLON.DynamicTexture(
        "DynamicTexture",
        {
          width: 30,
          height: 30,
        },
        scene,
        true
      );
      dynamicTexture.drawText(
        pinIndex,
        5,
        20,
        "bold 20px Arial",
        "white",
        "black",
        true,
        true
      );

      const plane = BABYLON.MeshBuilder.CreatePlane(
        "billboard",
        {
          height: 1,
          width: 1,
        },
        scene,
        true
      );
      plane.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
      plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
      plane.renderingGroupId = 1;
      plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
      plane.material.backFaceCulling = false;
      plane.position = pin.getAbsolutePosition();
      plane.material.diffuseTexture = dynamicTexture;
      pin.tooltip = plane;
      return;
    } else {
      if (pin.tooltip) {
        pin.tooltip.dispose(false, true);
        delete pin.tooltip;
      }
      return;
    }
  },

  //Generate NetWork Id
  generateNetworkId(pin) {
    if (pin.parent.parent.netID) {
      return pin.parent.parent.netID;
    } else {
      let id = BABYLON.Tools.RandomId();
      pin.parent.parent.netID = id;
      return id;
    }
    // return (
    //   String.fromCharCode(65 + pin.metadata.indexPart) + pin.metadata.indexPart
    // );
  },
  //Find Snap Of Grid
  snapToGrip(val) {
    return parseFloat(
      (this.gridRatio * Math.round(val / this.gridRatio)).toFixed(2)
    );
  },
  //Find Position From Ground
  getGroundPosition(evt) {
    const _that = this;
    let pickinfo = _that.scene.pick(
      _that.scene.pointerX,
      _that.scene.pointerY,
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
  //Make Junction Points on Route
  jucntionPoint(position) {
    let poly = BABYLON.MeshBuilder.CreateDisc(
      "point",
      {
        radius: 0.08,
        tessellation: 1000,
        updatable: true,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      },
      this.scene
    );
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    material.diffuseColor = BABYLON.Color3.FromHexString(
      this.Layer[this.selectedLayer].wireColor
    );
    material.emissiveColor = BABYLON.Color3.Black();
    material.specularColor = BABYLON.Color3.Black();
    poly.isPickable = true;
    poly.actionManager = new BABYLON.ActionManager(this.scene);
    const _this = this;
    poly.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        (evt) => {}
      )
    );
    poly.material = material;
    poly.position = position;
    poly.position.y = 0.01;
    poly.rotation.x = Math.PI / 2;
    return poly;
  },
  //Create Connection between two legs
  createConnection(p1, p2, mirror, id) {
    const height = 0.05;
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    material.diffuseColor = BABYLON.Color3.White();
    material.emissiveColor = BABYLON.Color3.Black();
    material.specularColor = BABYLON.Color3.Black();
    const line = BABYLON.MeshBuilder.CreatePlane(
      "wires",
      {
        width: 1,
        height: height,
        sideOrientation: mirror
          ? BABYLON.Mesh.BACKSIDE
          : BABYLON.Mesh.FRONTSIDE,
        updatable: true,
      },
      this.scene
    );

    var dist = parseFloat(Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2));
    var rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
    line.position = BABYLON.Vector3.Center(p1, p2);
    line.rotation = new BABYLON.Vector3(Math.PI / 2, rotAngle + Math.PI / 2, 0);
    line.scaling.x = dist;
    line.material = material;
    line.renderingGroupId = 1;
    if (id) line.uniqueId = id;
    line.actionManager = new BABYLON.ActionManager(this.scene);
    const _this = this;
    let tempCon = null;
    line.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        (evt) => {
          if (this.selectedOption === 1 && _this.activePins.length === 0) {
            _this.connection = _this.connection.map((v) => {
              v.connection = v.connection.map((val) => {
                val.pins = val.pins.map((value, k) => {
                  this.Mesh2D.map((values) => {
                    if (values.netID === value.netID) {
                      value.mesh = values.pins[value.pinIndex - 1];
                      if (k === 1) {
                        value.mesh.metadata.connection = tempCon;
                        tempCon.metadata.connection =
                          values.pins[value.pinIndex - 1];
                      } else {
                        tempCon = values.pins[value.pinIndex - 1];
                      }
                    }
                  });
                  value.mesh.material.emissiveColor = BABYLON.Color3.Black();
                  if (val.id === evt.source.uniqueId) {
                    _this.activePins.push(value);
                    value.mesh.material.emissiveColor = BABYLON.Color3.White();
                  }
                  return value;
                });
                return val;
              });
              return v;
            });
          } else if (this.selectedOption === 3) {
            _this.deleteConnections(evt.source);
          }
        }
      )
    );
    return line;
  },
  //Making Route On Pin/Leg Click
  togglePinConnection(pin) {
    // const rotation = pin.rotationQuaternion.toEulerAngles();
    // const y = rotation.y * (180 / Math.PI);
    // const z = rotation.z * (180 / Math.PI);
    // const x = rotation.x * (180 / Math.PI);
    // console.log(x, y, z);
    // if (x === -90 && y == 0 && z == 0) {
    //   this.z = pin.getAbsolutePosition().z;
    // }
    if (this.activePins.length === 0 && this.selectedOption !== 8) {
      return;
    }
    if (this.temporaryPin && this.selectedOption === 1) {
      if (this.temporaryPin.mesh.uniqueId === pin.uniqueId) {
        if (this.activeConnection) {
          this.activeConnection.setEnabled(true);
          this.activeConnection = null;
          this.temporaryPin = null;
          this.activePins = [];
          if (this.auxline) {
            this.auxline.dispose(false, true);
            this.auxline = null;
          }
          if (this.auxline2) {
            this.auxline2.dispose(false, true);
            this.auxline2 = null;
          }
          this.lastPositionWiring = null;
          return;
        }
      }
    }
    if (this.activePins.length === 2 && this.selectedOption !== 8) {
      let temp1 = this.activePins.filter(
        (v) => v.mesh.uniqueId !== pin.uniqueId
      );
      let temp2 = this.activePins.filter(
        (v) => v.mesh.uniqueId === pin.uniqueId
      );
      this.activePins = temp1;
      this.temporaryPin = temp2[0];
      this.connection.map((v) => {
        v.connection.map((val) => {
          val.pins.map((value) => {
            if (value.mesh.uniqueId === pin.uniqueId) {
              this.activeConnection = val.wires;
            }
          });
        });
      });
    } else {
      this.activePins = [];
      if (this.auxline2 !== null) {
        this.auxline2.dispose(false, true);
        this.auxline2 = null;
      }
    }

    if (!pin.metadata.connection && this.selectedOption === 1) {
      return;
    } else if (this.selectedOption === 1) {
      let mesh = this.scene.getMeshByUniqueID(pin.metadata.connection.uniqueId);
      mesh.material.emissiveColor = BABYLON.Color3.White();
    }
    let wire = null;
    let lastClicked = null;
    if (this.activePin === null) {
      this.activePin = pin;
      lastClicked = this.activePin;
      pin.material.emissiveColor = BABYLON.Color3.White();
    } else {
      if (pin.metadata.connection && this.selectedOption === 1) {
        let mesh = this.scene.getMeshByUniqueID(
          pin.metadata.connection.uniqueId
        );
        mesh.material.emissiveColor = BABYLON.Color3.Black();
      }
      pin.material.emissiveColor = BABYLON.Color3.Black();
      this.activePin.material.emissiveColor = BABYLON.Color3.Black();
      if (this.activePin.id === pin.id) {
        if (this.auxline !== null) {
          this.auxline.dispose(false, true);
          this.auxline = null;
        }
        this.lastPositionWiring = null;
        this.activePin = null;
        this.tempNet = null;
        return;
      }
      lastClicked = this.activePin;
      this.activePin = null;
    }
    if (this.lastPositionWiring !== null) {
      const point = pin.getAbsolutePosition();
      if (this.auxline !== null) {
        this.auxline.dispose(false, true);
        this.auxline = null;
      }
      let id = null;
      if (this.selectedOption === 8) {
        if (this.tempNet.connection[0]) id = this.tempNet.connection[0].id;
        wire = this.createConnection(
          this.lastPositionWiring,
          point,
          undefined,
          id
        );
      } else wire = this.createLine2Points(this.lastPositionWiring, point);
      this.lastPositionWiring = null;
    } else {
      this.lastPositionWiring = pin.getAbsolutePosition();
      this.clickedPinPath = pin;
    }
    if (this.selectedOption === 8) {
      if (!this.tempNet) {
        this.tempPin = pin;
        let net = {};
        let pins = {};
        let connection = {};
        pins.partIndex = pin.metadata.indexPart;
        pins.pinIndex = pin.metadata.indexPin;
        pins.netID = this.generateNetworkId(pin);
        pins.mesh = pin;
        net.partOneId = this.generateNetworkId(pin);
        net.partTwoId = null;
        connection.pins = [pins];
        connection.startPoint = pin.getAbsolutePosition();
        connection.endPoint = null;
        connection.wires = null;
        connection.id = BABYLON.Tools.RandomId();
        net.connection = [connection];
        this.tempNet = net;
      } else {
        pin.metadata.connection = this.tempPin;
        this.scene.getMeshByUniqueID(
          this.tempPin.uniqueId
        ).metadata.connection = pin;
        let pins = {};
        pins.mesh = pin;
        pins.netID = this.generateNetworkId(pin);
        pins.partIndex = pin.metadata.indexPart;
        pins.pinIndex = pin.metadata.indexPin;
        this.tempNet.partTwoId = this.generateNetworkId(pin);
        this.tempNet.connection[0].pins.push(pins);
        this.tempNet.connection[0].wires = wire;
        this.tempNet.connection[0].endPoint = pin.getAbsolutePosition();
        wire.routeId = this.tempNet.connection[0].id;
        let index = this.connection.findIndex(
          (v) =>
            (v.partOneId === this.tempNet.partOneId &&
              v.partTwoId === this.tempNet.partTwoId) ||
            (v.partOneId === this.tempNet.partTwoId &&
              v.partTwoId === this.tempNet.partOneId)
        );
        if (index === -1) {
          this.connection.push(this.tempNet);
        } else {
          this.connection[index].connection.push(this.tempNet.connection[0]);
        }
        this.tempNet = null;
        this.tempPin = null;
      }
      return;
    }
    if (!this.tempNet) {
      let net = {};
      let Routing = {};
      let pins = {};
      pins.partIndex = pin.metadata.indexPart;
      pins.pinIndex = pin.metadata.indexPin;
      pins.netID = this.generateNetworkId(pin);
      pins.mesh = pin;
      net.partOneId = this.generateNetworkId(pin);
      net.partTwoId = null;
      Routing.id = BABYLON.Tools.RandomId();
      Routing.wires = [];
      Routing.pins = [pins];
      Routing.Points = [];
      Routing.startPoint = pin.getAbsolutePosition();
      Routing.endPoint = null;
      Routing.parent = null;
      Routing.holes = [];
      Routing.route = [pin.getAbsolutePosition()];
      Routing.mirror = [];
      Routing.Pin = [pin];
      Routing.Layer = this.Layer[this.selectedLayer];
      net.routing = [Routing];
      this.tempNet = net;
    } else {
      let pins = {};
      pins.partIndex = pin.metadata.indexPart;
      pins.pinIndex = pin.metadata.indexPin;
      pins.netID = this.generateNetworkId(pin);
      this.tempNet.partTwoId = this.generateNetworkId(pin);
      this.tempNet.routing[0].pins.push(pins);
      this.tempNet.routing[0].Pin.push(pin);
      this.tempNet.routing[0].endPoint = pin.getAbsolutePosition();
      this.tempNet.routing[0].route.push(pin.getAbsolutePosition());
      this.tempNet.routing[0].wires.push(wire);
      let index = this.nets.findIndex(
        (v) =>
          (v.partOneId === this.tempNet.partOneId &&
            v.partTwoId === this.tempNet.partTwoId) ||
          (v.partOneId === this.tempNet.partTwoId &&
            v.partTwoId === this.tempNet.partOneId)
      );

      let newIndex = this.connection.findIndex(
        (v) =>
          (v.partOneId === this.tempNet.partOneId &&
            v.partTwoId === this.tempNet.partTwoId) ||
          (v.partOneId === this.tempNet.partTwoId &&
            v.partTwoId === this.tempNet.partOneId)
      );
      if (newIndex !== -1) {
        let count = 0;
        let i = 0;
        this.connection[newIndex].connection.map((val, k) => {
          val.pins.map((v) => {
            this.tempNet.routing[0].pins.map((value) => {
              if (
                value.partIndex === v.partIndex &&
                value.pinIndex === v.pinIndex
              ) {
                count++;
                i = k;
              }
            });
          });
        });
        if (count === 2) {
          this.connection[newIndex].connection[i].wires.setEnabled(false);
          this.tempNet.routing[0].wires = this.tempNet.routing[0].wires.map(
            (v) => {
              v.routeId = this.connection[newIndex].connection[i].wires.routeId;
              return v;
            }
          );
          this.tempNet.routing[0].id = this.connection[newIndex].connection[
            i
          ].wires.routeId;
        }
      }
      let root = new BABYLON.TransformNode("route", this.scene);
      this.tempNet.routing[0].Points.map((v) => (v.parent = root));
      this.tempNet.routing[0].wires.map((v) => (v.parent = root));
      this.tempNet.routing[0].ParentWire = root;

      if (index === -1) {
        this.nets.push(this.tempNet);
      } else {
        this.nets[index].routing.push(this.tempNet.routing[0]);
      }
      this.tempNet = null;
    }
  },
  //SELECT ACTIVE OPTION OF CURRENT MENU
  setFunctionOption(param) {
    let index = this.options.findIndex((val) => val === param);
    this.selected = [];
    this.selectedHole = [];
    this.selectedOption = index;
  },
  //Draw line Continously
  lineDraw(evt) {
    if (this.auxline !== null) {
      this.auxline.dispose(false, true);
      this.auxline = null;
    }
    if (this.auxline2 !== null) {
      this.auxline2.dispose(false, true);
      this.auxline2 = null;
    }
    const point = this.getGroundPosition();
    if (this.selectedOption === 8)
      this.auxline = this.createConnection(this.lastPositionWiring, point);
    else {
      if (this.activeConnection) {
        this.activeConnection.setEnabled(false);
      }
      this.auxline = this.createLine2Points(this.lastPositionWiring, point);
      if (this.activePins.length > 0) {
        this.auxline2 = this.createConnection(
          point,
          this.activePins[0].mesh.getAbsolutePosition()
        );
      }
    }
    return point;
  },
  //find connection pins!
  findWiresConnectionIndex(mesh) {
    let index = [];
    let meshes = mesh.pins;
    for (let Mesh = 0; Mesh < meshes.length; Mesh++) {
      let Meshes = meshes[Mesh];
      for (let Net = 0; Net < this?.connection?.length; Net++) {
        let net = this.connection[Net];
        if (
          net.partOneId === this.generateNetworkId(Meshes) ||
          net.partTwoId === this.generateNetworkId(Meshes)
        ) {
          for (let Route = 0; Route < net.connection.length; Route++) {
            let Routing = net.connection[Route];
            if (Routing.active)
              for (let Pin = 0; Pin < Routing.pins.length; Pin++) {
                if (
                  Meshes.parent.parent.netID === Routing.pins[Pin].netID &&
                  Meshes.metadata.indexPin === Routing.pins[Pin].pinIndex
                ) {
                  index.push({
                    connection: Route,
                    net: Net,
                    mesh: Meshes,
                    first: Pin === 0 ? true : false,
                  });
                }
              }
          }
        }
      }
    }
    return index;
  },
  //Update Position of exisiting nets
  updateConectionPinPosition(mesh) {
    let index = this.findWiresConnectionIndex(mesh);
    index.map((v) => {
      let net = this.connection[v.net].connection[v.connection];
      let p1, p2, point;
      if (v.first) {
        p1 = v.mesh.getAbsolutePosition();
        if (!net.endPoint.x) {
          p2 = new BABYLON.Vector3(
            net.endPoint._x,
            net.endPoint._y,
            net.endPoint._z
          );
        } else p2 = net.endPoint;

        net.startPoint = p1;
        let dist = parseFloat(
          Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2)
        );
        let rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
        if (net.wires !== null) {
          net.wires.position = BABYLON.Vector3.Center(p1, p2);
          net.wires.rotation = new BABYLON.Vector3(
            Math.PI / 2,
            rotAngle + Math.PI / 2,
            0
          );
          net.wires.scaling.x = dist;
        } else {
          net.wires = this.createConnection(p1, p2);
          net.wires.setEnabled(net.active);
        }
        net.id = net.wires.uniqueId;
      } else {
        p1 = net.startPoint;
        p2 = v.mesh.getAbsolutePosition();
        if (!net.startPoint.x) {
          p1 = new BABYLON.Vector3(
            net.startPoint._x,
            net.startPoint._y,
            net.startPoint._z
          );
        } else p1 = net.startPoint;
        net.endPoint = p2;
        let dist = parseFloat(
          Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2)
        );
        let rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
        if (net.wires !== null) {
          net.wires.position = BABYLON.Vector3.Center(p1, p2);
          net.wires.rotation = new BABYLON.Vector3(
            Math.PI / 2,
            rotAngle + Math.PI / 2,
            0
          );
          net.wires.scaling.x = dist;
        } else {
          net.wires = this.createConnection(p1, p2);
          net.wires.setEnabled(net.active);
        }
        net.id = net.wires.uniqueId;
      }
    });
  },
  //Find Index Of Connection Wire
  findConnection(mesh) {
    let obj = {};
    this.connection.map((v, k) => {
      v.connection.map((val, index) => {
        if (val.wires.uniqueId === mesh.uniqueId) {
          obj = {
            first: k,
            second: index,
          };
        }
      });
    });
    return obj;
  },
  //Delete Connections
  deleteConnections(mesh) {
    let index = this.findConnection(mesh);
    delete this.connection[index.first].connection[index.second];
    this.connection = this.connection.filter((v) => {
      if (v !== undefined && v !== null) {
        v.connection = v.connection.filter((val) => {
          if (val !== undefined && val !== null) {
            return val;
          }
        });
        return v;
      }
    });
    return mesh.dispose(false, true);
  },
  //Add Multiple Data At Specific Index
  insert(arr, index, newItem) {
    return [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index),
    ];
  },
  random_hex_color_code() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  },
  //Make Layer
  makeLayer(
    name = `Layer ${this.Layer.length - 4}`,
    size = 0.035,
    color = "#FFFF00",
    connection = null,
    wireColor = this.random_hex_color_code(),
    type = "Layer",
    position = "top"
  ) {
    let obj = {
      name,
      size,
      color,
      connection,
      type,
      position,
      wireColor,
    };
    let prepreg = {
      name: "Core",
      color: "#333333",
      connection: null,
      size: 0.1,
      wireColor: null,
      type: "Prepreg",
      position: "center",
    };
    let index = -1;
    if (position === "top") {
      index = this.Layer.findIndex((v) => v.name === "Top Layer");
    }
    let arr = this.insert(this.Layer, index, obj);
    arr = this.insert(arr, index + 1, prepreg);
    this.Layer = arr;
    if (this.view !== "2d") {
      this.createPCB();
    }
  },
  //Return Total Layer
  totalLayers() {
    return this.Layer.filter((v) => v.type === "Layer");
  },
  //Selected Layer
  selectLayer(param) {
    let index = this.Layer.findIndex((val) => val.name === param);
    this.selectedLayer = index;
  },
  //Create Line Between Two Points
  createLine2Points(p1, p2, mirror) {
    const height = this.wireWidth;
    const _this = this;
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    if (this.selectedLayer !== -1)
      material.diffuseColor = BABYLON.Color3.FromHexString(
        this.Layer[this.selectedLayer].wireColor
      );
    material.emissiveColor = BABYLON.Color3.Black();
    material.specularColor = BABYLON.Color3.Black();
    const line = BABYLON.MeshBuilder.CreatePlane(
      "wires",
      {
        width: 1,
        height: height,
        sideOrientation: mirror
          ? BABYLON.Mesh.BACKSIDE
          : BABYLON.Mesh.FRONTSIDE,
        updatable: true,
      },
      this.scene
    );
    var dist = parseFloat(Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2));
    var rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
    line.position = BABYLON.Vector3.Center(p1, p2);
    line.position.y = 0.01;
    line.rotation = new BABYLON.Vector3(Math.PI / 2, rotAngle + Math.PI / 2, 0);
    line.scaling.x = dist;
    line.material = material;
    line.renderingGroupId = 1;
    line.isPickable = true;
    line.actionManager = new BABYLON.ActionManager(this.scene);
    line.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickDownTrigger,
        (evt) => {
          let arr = [];
          let index = -1;
          switch (_this.selectedOption) {
            case 1: {
              if (_this.lastPositionWiring !== null) {
                if (_this.auxline !== null) {
                  _this.auxline.dispose(false, true);
                  _this.auxline = null;
                }
                if (_this.selectedOption === 1) {
                  const point = _this.getGroundPosition();
                  let wire = _this.createLine2Points(
                    _this.lastPositionWiring,
                    point
                  );
                  wire.routeId = this.tempNet.routing[0].id;
                  let poly = _this.jucntionPoint(point);
                  _this.lastPositionWiring = point;
                  this.tempNet.routing[0].route.push(point);
                  this.tempNet.routing[0].Points.push(poly);
                  this.tempNet.routing[0].wires.push(wire);
                }
              }
              break;
            }
            case 9: {
              let routeId = "";
              _this.nets.map((v, i) => {
                v.routing.map((val, k) => {
                  if (val.id === evt.source.routeId) {
                    _this.selectedNet = v;
                    val.Points.map((z) => {
                      z.material.diffuseColor = BABYLON.Color3.White();
                    });
                    // index = i;
                    // let rout = v.routing;
                    // delete rout[k];
                    // routeId = val.id;
                    // arr = rout;
                  }
                });
              });
              _this.connection.map((v) =>
                v.connection.map((val) => {
                  if (val.id === routeId) {
                    val.wires.setEnabled(true);
                  }
                })
              );
              // if (index !== -1)
              //   _this.nets[index].routing = arr.filter(
              //     (v) => v !== undefined && v !== null
              //   );
              break;
            }
          }
        }
      )
    );
    return line;
  },
  //Find Wire Index On Base Of Mesh
  findIndexOfNetAndRoute(mesh, wiring) {
    let index = [];
    let meshes = mesh.pins;

    for (let Mesh = 0; Mesh < meshes.length; Mesh++) {
      let Meshes = meshes[Mesh];
      for (let Net = 0; Net < this.nets.length; Net++) {
        let net = this.nets[Net];
        if (
          net.partOneId === this.generateNetworkId(Meshes) ||
          net.partTwoId === this.generateNetworkId(Meshes)
        ) {
          for (let Route = 0; Route < net.routing.length; Route++) {
            let Routing = net.routing[Route];
            for (let Pin = 0; Pin < Routing.pins.length; Pin++) {
              if (
                Meshes.metadata.indexPart === Routing.pins[Pin].partIndex &&
                Meshes.metadata.indexPin === Routing.pins[Pin].pinIndex
              ) {
                if (wiring !== true) {
                  index.push({ net: Net });
                  break;
                }
                index.push({
                  route: Route,
                  net: Net,
                  mesh: Meshes,
                  first: Pin === 0 ? true : false,
                });
              }
            }
          }
        }
      }
    }
    return index;
  },
  make3DVector(obj) {
    const { x, y, z } = obj;
    return new BABYLON.Vector3(x, y, z);
  },
  refectorNetwork() {
    const _this = this;
    _this.nets = _this.nets.map((v) => {
      v.routing = v.routing.map((val) => {
        _this.selectedLayer = this.Layer.findIndex(
          (v) => v.name === val.Layer.name
        );
        let root = new BABYLON.TransformNode("route", this.scene);
        val.wires = [];
        val.pins = val.pins.map((value, k) => {
          this.Mesh2D.map((values) => {
            if (values.netID === value.netID) {
              value.mesh = values.pins[value.pinIndex - 1];
              val.Pin.push(value.mesh);
            }
          });
          return value;
        });
        for (let i = 0; i < val.route.length - 1; i++) {
          if (i !== 0) {
            let poly = _this.jucntionPoint(_this.make3DVector(val.route[i]));
            poly.parent = root;
            val.Points.push(poly);
          }
          let wire = _this.createLine2Points(
            _this.make3DVector(val.route[i]),
            _this.make3DVector(val.route[i + 1])
          );
          wire.parent = root;
          val.wires.push(wire);
        }
        val.ParentWire = root;
        return val;
      });
      return v;
    });
  },
  //Update Wire On Base Of Pins
  updateWireOnMeshPin(mesh, mirror, findIndexes) {
    let index = this.findIndexOfNetAndRoute(mesh, true);
    if (findIndexes) {
      index = findIndexes;
    }
    index.map((v) => {
      let net = this.nets[v.net].routing[v.route];
      let p1, p2, point;
      if (v.first) {
        p1 = v.mesh.getAbsolutePosition();
        p2 = this.scene
          .getMeshByUniqueID(net.Pin[1].uniqueId)
          .getAbsolutePosition();
        if (net.Points.length !== 0) {
          p2 = net.Points[0].getAbsolutePosition();
        }
        net.startPoint = p1;
        net.route[0] = p1;
        if (mirror) {
          net.wires[0].dispose(false, true);
          net.mirror[0] = true;
          net.wires[0].mirror = true;
          net.wires[0] = this.createLine2Points(p1, p2, net.wires[0].mirror);
          net.wires[0].parent = net.parent;
          let id = this.createHoleOnPcb(5, net.route[1]);
          net.holes.push({
            id,
            routeIndex: 1,
          });
          return;
        } else if (mirror === false) {
          net.wires[0].dispose(false, true);
          net.wires[0].mirror = false;
          net.mirror[0] = false;
          net.wires[0] = this.createLine2Points(p1, p2, net.wires[0].mirror);
          net.wires[0].parent = net.parent;
          return;
        }
        let dist = parseFloat(
          Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2)
        );
        let rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
        net.wires[0].position = BABYLON.Vector3.Center(p1, p2);
        net.wires[0].rotation = new BABYLON.Vector3(
          Math.PI / 2,
          rotAngle + Math.PI / 2,
          0
        );
        net.wires[0].scaling.x = dist;
      } else {
        p1 = this.scene
          .getMeshByUniqueID(net.Pin[0].uniqueId)
          .getAbsolutePosition();
        if (net.Points.length !== 0) {
          p1 = net.Points[net.Points.length - 1].getAbsolutePosition();
        }
        p2 = v.mesh.getAbsolutePosition();
        net.route[net.route.length - 1] = v.mesh.getAbsolutePosition();
        net.endPoint = p2;
        if (mirror) {
          net.wires[net.wires.length - 1].dispose(false, true);
          net.wires[net.wires.length - 1].mirror = true;
          net.mirror[net.wires.length - 1] = true;
          net.wires[net.wires.length - 1] = this.createLine2Points(
            p1,
            p2,
            net.wires[net.wires.length - 1].mirror
          );
          net.wires[net.wires.length - 1].parent = net.parent;

          let id = this.createHoleOnPcb(5, net.route[net.route.length - 2]);
          net.holes.push({
            id,
            routeIndex: net.route.length - 2,
          });
          return;
        } else if (mirror === false) {
          net.wires[net.wires.length - 1].dispose(false, true);
          net.wires[net.wires.length - 1].mirror = false;
          net.mirror[net.wires.length - 1] = false;
          net.wires[net.wires.length - 1] = this.createLine2Points(
            p1,
            p2,
            net.wires[net.wires.length - 1].mirror
          );
          net.wires[net.wires.length - 1].parent = net.parent;
          return;
        }

        let dist = parseFloat(
          Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2)
        );
        let rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
        net.wires[net.wires.length - 1].position = BABYLON.Vector3.Center(
          p1,
          p2
        );
        net.wires[net.wires.length - 1].rotation = new BABYLON.Vector3(
          Math.PI / 2,
          rotAngle + Math.PI / 2,
          0
        );
        net.wires[net.wires.length - 1].scaling.x = dist;
      }
    });
  },
  //Delete Part Along Connected Wires
  async deletePartWithWires(mesh) {
    let index = this.findIndexOfNetAndRoute(mesh);
    let index2 = this.findWiresConnectionIndex(mesh);
    index2.map(async (v) => {
      await this.connection[v.net].connection.map(
        async (val) => await val.wires.dispose(false, true)
      );
      await delete this.connection[v.net];
    });
    index.map((v) => {
      let net = this.nets[v.net];
      net.routing.map((val) => {
        val.wires.map((wire) => wire.dispose(false, true));
        val.Points.map((wire) => wire.dispose(false, true));
      });
      delete this.nets[v.net];
    });
    this.connection = await this.connection.filter(
      (v) => v !== undefined && v !== null
    );
    mesh.dispose(false, true);
  },

  createHoles(point) {
    const disc = BABYLON.MeshBuilder.CreateCylinder("hole", {
      height: this.calculateLayerSum(),
      diameter: 0.5,
      tessellation: 100,
      updatable: false,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
    });
    disc.position = point;
    disc.freezeNormals();
    const name = this.board.name;
    const material = this.board.material;
    const innerCSG = BABYLON.CSG.FromMesh(disc);
    const outerCSG = BABYLON.CSG.FromMesh(this.board);
    disc.dispose();
    this.board.dispose();
    const subCSG = outerCSG.subtract(innerCSG);
    const board = subCSG.toMesh(name, material, this.scene);
    this.scene.removeMesh(innerCSG);
    this.scene.removeMesh(outerCSG);
    this.scene.removeMesh(subCSG);
    board.freezeNormals();
    this.setBoardActions(board);
    this.board = board;
    return this.board;
  },
  calculateLayerSum() {
    return this.Layer.reduce((total, num) => {
      let size = total;
      if (typeof size === "object") {
        size = total.size;
      }
      return size + num.size;
    });
  },
  lastLayerPosition() {
    return this.LayerMesh.find((v) => v.name === "Top Layer Mask");
  },

  createWireConnectionHole(position, height) {
    const root = new BABYLON.TransformNode("PCB", this.scene);
    var y = 0.0;
    this.LayerMesh.map((v) => v.dispose());
    this.pcb.dispose();
    let arr = [];
    this.LayerMesh.map((v) => {
      const disc = BABYLON.MeshBuilder.CreateCylinder("hole", {
        height: height,
        diameter: 0.5,
        tessellation: 100,
        updatable: false,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      });
      disc.position = position;
      disc.freezeNormals();
      y = y + v.scaling.y;
      let board = v;
      const innerCSG = BABYLON.CSG.FromMesh(disc);
      const outerCSG = BABYLON.CSG.FromMesh(board);
      const subCSG = outerCSG.subtract(innerCSG);
      let material = new GridMaterial("material1", this.scene);
      material.majorUnitFrequency = 1;
      material.zOffset = 1;
      material.gridRatio = this.gridRatio;
      material.mainColor = BABYLON.Color3.FromHexString(v.color);
      material.lineColor = BABYLON.Color3.FromHexString(v.color);
      board.dispose();
      board = subCSG.toMesh(v.name, material, this.scene);
      board.material = material;
      board.freezeNormals();
      board.position.y = y;
      board.color = v.color;
      board.metadata = v.metadata;
      board.parent = root;
      this.scene.removeMesh(innerCSG);
      this.scene.removeMesh(outerCSG);
      this.scene.removeMesh(subCSG);
      y = y + v.scaling.y;
      arr.push(board);
      disc.dispose();
    });
    this.LayerMesh = arr;
    this.pcb = root;
  },
  createConnectionHollow(segLength, r) {
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    material.diffuseColor = BABYLON.Color3.FromHexString("#DAA520");
    material.emissiveColor = BABYLON.Color3.Black();
    material.specularColor = BABYLON.Color3.Black();
    var path = [];
    var numSides = 1000;
    // segLength = segLength;
    for (var i = 0; i < 2; i++) {
      var x = i * segLength;
      var y = 0;
      var z = 0;
      path.push(new BABYLON.Vector3(x, y, z));
    }
    var mesh = new BABYLON.MeshBuilder.CreateTube(
      "holeConductor",
      {
        path,
        radius: r,
        tessellation: 1000,
        updatable: true,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      },
      this.scene
    );
    mesh.material = material;
    mesh.rotate(BABYLON.Axis.Z, Math.PI / 2, BABYLON.Space.WORLD);
    return mesh;
  },
  caldculateHeightOfLayerFromZero(mesh) {
    let index = this.LayerMesh.findIndex((v) => v.id === mesh.id);
    let newArray = this.LayerMesh.filter((v, k) => {
      if (k <= index) {
        return v;
      }
    });
    return newArray.reduce((total, num) => {
      let size = total;
      if (typeof size === "object") {
        size = total.position.y;
      }
      return size + num.position.y;
    });
  },
  //Generate hole array for polygone
  genereatehole(radius, position) {
    let holes = [];
    for (let i = 0; i <= 6.1; i = i + 0.1) {
      holes.push(
        new BABYLON.Vector3(
          radius * Math.sin(i) + position.x,
          radius,
          radius * Math.cos(i) + position.z
        )
      );
    }
    return holes;
  },
  //Create hole on PCB
  createHoleOnPcb(radius, position, k) {
    let holes = this.genereatehole(0.2, position);
    // let mySphere = BABYLON.MeshBuilder.CreateCylinder("hole", {
    //   height: radius,
    //   diameter: 0.5,
    //   tessellation: 100,
    //   updatable: false,
    //   sideOrientation: BABYLON.Mesh.DOUBLESIDE,
    // });
    // let id = BABYLON.Tools.RandomId();
    let conductor = this.createConnectionHollow(radius * 1.8, 0.2);
    conductor.position = position;
    conductor.position.y = 0.02;
    // mySphere.position.x = position.x;
    // mySphere.position.y = 0.4;
    // mySphere.position.z = position.z;
    // mySphere.visibility = 0;
    // mySphere.renderOverlay = 1;
    // mySphere.overlayColor = BABYLON.Color3.Blue();
    // mySphere.freezeNormals();
    // mySphere.uniqueId = id;
    // mySphere.isPickable = true;
    this.Hole[k].mesh = conductor;
    this.Hole[k].hole = holes;
    return conductor;
  },
  async addCatToDb(item) {
    return new Promise((resolve, reject) => {
      let trans = this.db.transaction(["Pro"], "readwrite");
      trans.oncomplete = (e) => {
        resolve();
      };
      let store = trans.objectStore("Pro");
      store.clear();
      store.add(item);
    });
  },

  async exportObj() {
    const model = await this.doDownload();
    let connection = Object.assign([], this.connection);
    connection = connection.map((v) => {
      v.connection = v.connection.map((val) => {
        val.pins = val.pins.map((value) => {
          return {
            partIndex: value.partIndex,
            pinIndex: value.pinIndex,
            mesh: null,
            netID: value.netID,
          };
        });
        return {
          endPoint: val.endPoint,
          pins: val.pins,
          startPoint: val.startPoint,
          wires: null,
          active: val.wires.isEnabled(),
          id: val.id,
        };
      });
      return v;
    });
    let nets = Object.assign([], this.nets);
    nets = nets.map((v) => {
      v.routing = v.routing.map((val) => {
        return {
          Layer: val.Layer,
          ParentWire: null,
          Pin: [],
          holes: val.holes,
          endPoint: val.endPoint,
          Points: [],
          id: val.id,
          mirror: val.mirror,
          parent: val.parent,
          pins: val.pins.map((v) => {
            return {
              netID: v.netID,
              partIndex: v.partIndex,
              pinIndex: v.pinIndex,
              mesh: null,
            };
          }),
          route: val.route.map((v) => {
            return {
              x: v.x,
              y: v.y,
              z: v.z,
            };
          }),
          startPoint: val.startPoint,
        };
      });
      return v;
    });
    let assets = Object.assign({}, this.data.assets);
    this.scene.rootNodes.map((val) => {
      this.data.assets.map((v, k) => {
        if (val.metadata) {
          if (k === val.metadata.engineData.index) {
            assets[k].transform.position = [
              val.getAbsolutePosition().x,
              val.getAbsolutePosition().y,
              val.getAbsolutePosition().z,
            ];
            assets[k].netID = val.netID;
          }
        }
      });
    });
    let obj = {
      connection: connection,
      nets: nets,
      // Hole: this.Hole,
      assets: this.data.assets,
    };
    let formData = new FormData();
    formData.append("file", model.file);
    await useFetch.post("/upload-files/", formData).then((response) => {
      obj.url = response.data.file;
    });
    this.addCatToDb({ ...obj, model });
    return obj;
    // return CircularJSON.stringify(obj);
  },
  disposeEngine() {
    this.canvas = null;
    this.board = null;
    this.resolution = [20, 20];
    this.lastPositionWiring = null;
    this.clickedPinPath = null;
    this.gridResolution = 1;
    this.auxline = null;
    this.data = null;
    this.nets = [];
    this.tempNet = null;
    this.activePin = null;
    this.activeIndexNetwork = -1;
    this.activeIndexRoute = -1;
    this.tempPin = null;
    this.selectedOption = 0;
    this._observer = null;
    this._secondObserver = null;
    this.Mesh3D = [];
    this.View = "2d";
    this.Hole = [];
    this.subGroups = [];
    this.selected = [];
    this.selectedHole = [];
    this.connection = [];
    if (this.scene) {
      for (let i = this.scene.meshes.length - 1; i >= 0; i--) {
        if (this.scene.meshes[i]) {
          this.scene.meshes[i].dispose(false, true);
        }
      }
      this.scene.dispose();
      delete this.scene;
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
