/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as BABYLON from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials/grid";
import { attachImgToId } from "service";
import { v4 as uuidv4 } from "uuid";
import * as GUI from "@babylonjs/gui";
import "@babylonjs/core/Meshes/meshBuilder";
const earcut = require("earcut");
window.earcut = earcut;
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
  if (document.getElementById("customLoadingScreenDiv")) {
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
  document.getElementById("customLoadingScreenDiv").style.display = "none";
};

export default {
  //State Decleration
  reuse: false,
  scene: null,
  _engine: null,
  canvas: null,
  board: null,
  resolution: [20, 20],
  lastPositionWiring: null,
  clickedPinPath: null,
  gridResolution: 0.5,
  auxline: null,
  data: { assets: [], connection: [], nets: [] },
  nets: [],
  tempNet: null,
  activePin: null,
  activeIndexNetwork: -1,
  activeIndexRoute: -1,
  tempPin: null,
  selectedOption: 0,
  _observer: null,
  _secondObserver: null,
  Mesh3D: [],
  View: "2d",
  Hole: [],
  subGroups: [],
  selected: [],
  selectedHole: [],
  connection: [],
  tempMesh: [],
  Mesh2D: [],
  db: null,
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
  ],
  //Engine Intialization
  async init(scene, data, reuse, toggle) {
    const _that = this;
    this.scene = scene;
    // scene.debugLayer.show();
    this._engine = scene.getEngine();
    this._engine.resize();
    this.canvas = this._engine.getRenderingCanvas();
    const that = this;
    this.scene.actionManager = new BABYLON.ActionManager(this.scene);
    this.scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnEveryFrameTrigger,
        async (evt) => {
          if (_that.selectedOption !== 1 && _that.selectedOption !== 8) {
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
      imgWidth = "65px"
    ) {
      var result = new GUI.Button(name);
      var ellipse1 = new GUI.Rectangle();
      result.zIndex = 1000;
      ellipse1.width = "80px";
      ellipse1.height = "80px";
      ellipse1.color = "white";
      ellipse1.cornerRadius = 10;
      ellipse1.shadowColor = "#00000050";
      ellipse1.background = "#fff";
      ellipse1.shadowBlur = 10;

      // Adding image
      var iconImage = new GUI.Image(name + "_icon", imageUrl);
      iconImage.width = imgWidth;
      iconImage.stretch = GUI.Image.STRETCH_UNIFORM;
      iconImage.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      iconImage.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      result.addControl(ellipse1);
      result.addControl(iconImage);
      return result;
    };
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
    var button2 = GUI.Button.CreateMyCustomButton(
      "Screen",
      "",
      "/assets/images/expand.png",
      "40px"
    );
    button2.width = "50px";
    button2.height = "50px";
    button2.onPointerUpObservable.add(function () {
      var el = document.getElementById("engine");
      // use necessary prefixed versions
      // el.webkitRequestFullscreen();
      // finally the standard version
      el.requestFullscreen();
    });
    button2.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    button2.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    advancedTexture.addControl(button2);
    this.addBoard();
    if (data) {
      if (data.assets) {
        this.importParts(data);
      }
      if (data.nets) {
        this.data.nets = data.nets;
      }
    }
    // if (reuse) {
    //   this.reuse = reuse;
    //   let initData = await this.getIndexDB();
    //   if (initData && initData.length > 0) {
    //     const electronic = initData[0];
    //     this.importRuntime(electronic, true);
    //   }
    // }
    return;
  },
  importRuntime(data, check) {
    if (data.assets) {
      this.importParts(data, check);
    }
    if (data.nets) {
      this.data.nets = data.nets;
    }
  },
  async getIndexDB() {
    return new Promise((resolve, reject) => {
      let trans = this.db.transaction(["Pro"], "readonly");
      trans.oncomplete = (e) => {
        resolve(Pro);
      };

      let store = trans.objectStore("Pro");
      let Pro = [];
      store.openCursor().onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
          Pro.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },
  //Make Junction Points on Route
  jucntionPoint(position) {
    let poly = BABYLON.Mesh.CreateDisc(
      "point",
      0.08,
      1000,
      this.scene,
      false,
      BABYLON.Mesh.DOUBLESIDE
    );
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    material.diffuseColor = BABYLON.Color3.Red();
    material.emissiveColor = BABYLON.Color3.Black();
    material.specularColor = BABYLON.Color3.Black();
    poly.material = material;
    poly.position = position;
    poly.position.y = 0.01;
    poly.rotation.x = Math.PI / 2;
    return poly;
  },
  //Toggle Grid
  toggleGrid() {
    this.board.setEnabled(!this.board.isEnabled());
  },
  //Adding PCB Board
  addBoard() {
    const _this = this;
    this.board = BABYLON.MeshBuilder.CreateBox(
      "rectangle",
      {
        height: 0.01,
        width: parseFloat(40),
        depth: parseFloat(40),
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      },
      this.scene
    );
    this.board.material = new GridMaterial("material", this.scene);
    this.board.material.majorUnitFrequency = 1;
    this.board.material.gridRatio = this.gridResolution;
    this.board.material.opacity = 0.95;
    this.board.material.mainColor = new BABYLON.Color3(0.85, 0.85, 0.85);
    this.board.material.lineColor = new BABYLON.Color3(0.85, 0.85, 0.85);
    this.board.actionManager = new BABYLON.ActionManager(this.scene);
    this.board.actionManager.registerAction(
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
          if (_this.selectedOption !== 1 && _this.selectedOption !== 8) {
            return;
          }
          // if (_this.lastPositionWiring !== null) {
          //   if (_this.auxline !== null) {
          //     _this.auxline.dispose(false, true);
          //     _this.auxline = null;
          //   }
          //   if (_this.selectedOption === 1) {
          //     const point = _this.getGroundPosition();
          //     let wire = _this.createLine2Points(
          //       _this.lastPositionWiring,
          //       point
          //     );
          //     let poly = _this.jucntionPoint(point);
          //     _this.lastPositionWiring = point;
          //     this.tempNet.routing[0].route.push(point);
          //     this.tempNet.routing[0].Points.push(poly);
          //     this.tempNet.routing[0].wires.push(wire);
          //   }
          // }
        }
      )
    );
    return;
  },
  //Updating PCB Size
  updateResolution(param) {
    this.gridResolution = param;
    this.addBoard();
  },
  //Importing Assets From Scehmatic Object
  async importParts(data, check) {
    let assets = data?.assets;
    var connection = Object.assign([], data?.connection);
    let temp = [];
    // if (!check)
    //   assets.map((v, i) => {
    //     let guid = uuidv4();
    //     let guid2 = uuidv4();
    //     connection = connection.map((val, k) => {
    //       let obj = val;
    //       if (val.partOneId === v.netID) {
    //         obj = {
    //           ...obj,
    //           partOneId: guid2,
    //         };
    //       }
    //       if (val.partTwoId === v.netID) {
    //         obj = {
    //           ...obj,
    //           partTwoId: guid2,
    //         };
    //       }
    //       obj.connection.map((value, key) => {
    //         value.pins.map((V) => {
    //           if (V.partIndex === v.partID) {
    //             V.partIndex = guid;
    //           }
    //           if (V.netID === v.netID) {
    //             V.netID = guid2;
    //           }
    //           return {
    //             ...V,
    //           };
    //         });
    //         return value;
    //       });

    //       return obj;
    //     });
    //     assets[i].partID = guid;
    //     assets[i].netID = guid2;
    //   });
    if (this.connection && this.connection.length > 0) {
      this.connection = this.connection.concat(connection);
    } else {
      this.connection = connection;
    }
    this._engine.displayLoadingUI();
    if (assets?.length === 0) {
      this._engine.hideLoadingUI();
      return;
    }
    for (let i = 0; i < assets?.length; i++) {
      let obj = assets[i];
      if (assets[i].partID) {
        obj = {
          ...obj,
          partID: assets[i].partID,
        };
      } else {
        obj = {
          ...obj,
          partID: uuidv4(),
        };
      }
      this.data.assets.push(obj);
      let mesh = await this.handleImport(obj);
      this.Mesh2D.push(mesh);
    }
    this.Mesh2D.map((v) => this.updateConectionPinPosition(v));
    this._engine.hideLoadingUI();
  },
  //Handle Importing 2D Part
  async handleImport(engineData) {
    // if (!this.data) {
    //   this.data = { assets: [] };
    // }
    // engineData.index = this.data.assets.length;
    // await this.data.assets.push(engineData);
    const decode = await attachImgToId(engineData.schematic, true, true);
    if (!decode) return;
    const raw_content = await BABYLON.Tools.DecodeBase64(decode.data);
    const blob = await new Blob([raw_content]);
    const BBJSurl = await URL.createObjectURL(blob);
    if (BBJSurl) {
      BABYLON.SceneLoader.loggingLevel = BABYLON.SceneLoader.DETAILED_LOGGING;
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
        if (meshes[i].name.toLowerCase().indexOf("sc_body") !== -1) {
          meshes[0].body = meshes[i];
        } else {
          if (meshes[i].name.toLowerCase().indexOf("sc_pin") !== -1) {
            meshes[0].pins.push(meshes[i]);
            await this.setPinsOfParts(meshes[i], engineData.partID);
          } else {
            if (meshes[i].name.toLowerCase().indexOf("sc_name") !== -1) {
              meshes[0].nick = meshes[i];
              meshes[0].nick.isPickable = false;
            }
          }
        }
      }
      if (meshes[0].body) {
        await this.setBodyOfMesh(meshes[0]);
        if (engineData.netID) {
          meshes[0].netID = engineData.netID;
        }
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
    return pin;
  },
  //Making Route On Pin/Leg Click
  togglePinConnection(pin) {
    if (!pin.metadata.connection && this.selectedOption === 1) {
      return;
    } else if (this.selectedOption === 1) {
      let mesh = this.scene.getMeshByUniqueID(pin.metadata.connection.uniqueId);
      mesh.material.emissiveColor = BABYLON.Color3.White();
    }
    let wire = null;
    const _this = this;
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
      if (this.selectedOption === 8)
        wire = this.createConnection(this.lastPositionWiring, point);
      else wire = this.createLine2Points(this.lastPositionWiring, point);
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
        pins.partIndex = pin.metadata.indexPart;
        pins.pinIndex = pin.metadata.indexPin;
        pins.netID = this.generateNetworkId(pin);
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
      if (index === -1) {
        this.nets.push(this.tempNet);
      } else {
        this.nets[index].routing.push(this.tempNet.routing[0]);
      }
      this.tempNet = null;
    }
  },
  //Create Connection between two legs
  createConnection(p1, p2, mirror) {
    const height = 0.05;
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    material.diffuseColor = BABYLON.Color3.Red();
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
    return line;
  },
  //Create Line Between Two Points
  createLine2Points(p1, p2, mirror) {
    const height = 0.15;
    const _this = this;
    const material = new BABYLON.StandardMaterial("mat", this.scene);
    material.diffuseColor = BABYLON.Color3.Red();
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
    line.actionManager = new BABYLON.ActionManager(this.scene);
    line.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        (evt) => {
          let arr = [];
          let index = -1;
          switch (_this.selectedOption) {
            case 8: {
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
                    val.wires.map((z) => z.dispose(false, true));
                    index = i;
                    let rout = v.routing;
                    delete rout[k];
                    routeId = val.id;
                    arr = rout;
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
              if (index !== -1)
                _this.nets[index].routing = arr.filter(
                  (v) => v !== undefined && v !== null
                );
              break;
            }
          }
        }
      )
    );
    return line;
  },
  //Find Snap Of Grid
  snapToGrip(val) {
    return parseFloat(
      (this.gridResolution * Math.round(val / this.gridResolution)).toFixed(2)
    );
  },
  //Find Position From Ground
  getGroundPosition(evt) {
    const _that = this;
    let pickinfo = _that.scene.pick(
      _that.scene.pointerX,
      _that.scene.pointerY,
      function (mesh) {
        return mesh === _that.board;
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
  //Draw line Continously
  lineDraw(evt) {
    if (this.auxline !== null) {
      this.auxline.dispose(false, true);
      this.auxline = null;
    }
    const point = this.getGroundPosition();
    if (this.selectedOption === 8)
      this.auxline = this.createConnection(this.lastPositionWiring, point);
    else this.auxline = this.createLine2Points(this.lastPositionWiring, point);
    return point;
  },
  //Generate Wire Object For Net
  generateWireObject(mesh, width = 0.1, mirror = false) {
    let wires = {};
    wires.mesh = mesh;
    wires.width = width;
    wires.mirror = mirror;
    return wires;
  },
  //Generate NetWork Id
  //Generate NetWork Id
  generateNetworkId(pin) {
    if (pin && pin.parent && pin.parent.parent)
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
                  _this._observer = _this.scene.onPointerObservable.add(
                    (evt) => {
                      if (!startingPoint) return;
                      let current = _this.getGroundPosition();
                      if (!current) return;
                      let diff = current.subtract(startingPoint);
                      _thism.position.addInPlace(diff);
                      startingPoint = current;
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
                  _this.updateConectionPinPosition(_thism);
                }, 100);
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
                      metadata.transform.position[0] - 5,
                      metadata.transform.position[1],
                      metadata.transform.position[2],
                    ],
                  },
                  index: index,
                };
                this.handleImport(metadata);
                break;
              }
              case 3: {
                _this.deletePartWithWires(_thism);
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
              _this.updateConectionPinPosition(mesh);
            }
          }
        }
      )
    );
  },
  //Delete Part Along Connected Wires
  async deletePartWithWires(mesh) {
    let index2 = this.findWiresConnectionIndex(mesh);
    index2.map(async (v) => {
      await this.connection[v.net].connection.map(
        async (val) => await val.wires.dispose(false, true)
      );
      await delete this.connection[v.net];
    });
    this.connection = await this.connection.filter(
      (v) => v !== undefined && v !== null
    );
    this.data.assets = this.data.assets.filter(
      (v) => v.partID === mesh.metadata.engineData.partID
    );
    mesh.dispose(false, true);
  },
  //Set Active Options
  setFunctionOption(param) {
    let index = this.options.findIndex((val) => val === param);
    this.selectedOption = index;
  },
  //Update Position of exisiting nets
  updateConectionPinPosition(mesh) {
    let index = this.findWiresConnectionIndex(mesh);
    index.map((v) => {
      let net = this.connection[v.net].connection[v.connection];
      let p1, p2, point;
      if (v.first) {
        p1 = v.mesh.getAbsolutePosition();
        p2 = net.endPoint;
        net.startPoint = p1;
        if (net.wires) {
          let dist = parseFloat(
            Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2)
          );
          let rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
          net.wires.position = BABYLON.Vector3.Center(p1, p2);
          net.wires.rotation = new BABYLON.Vector3(
            Math.PI / 2,
            rotAngle + Math.PI / 2,
            0
          );
          net.wires.scaling.x = dist;
        } else {
          net.wires = this.createConnection(p1, p2);
          net.id = net.wires.uniqueId;
        }
      } else {
        p1 = net.startPoint;
        p2 = v.mesh.getAbsolutePosition();
        net.endPoint = p2;
        if (net.wires) {
          let dist = parseFloat(
            Number(BABYLON.Vector3.Distance(p1, p2)).toFixed(2)
          );
          let rotAngle = Math.atan((p1.x - p2.x) / (p1.z - p2.z));
          net.wires.position = BABYLON.Vector3.Center(p1, p2);
          net.wires.rotation = new BABYLON.Vector3(
            Math.PI / 2,
            rotAngle + Math.PI / 2,
            0
          );
          net.wires.scaling.x = dist;
        } else {
          net.wires = this.createConnection(p1, p2);
          net.id = net.wires.uniqueId;
        }
      }
    });
  },
  //find connection pins!
  findWiresConnectionIndex(mesh) {
    let index = [];
    let meshes = mesh.pins;
    for (let Mesh = 0; Mesh < meshes.length; Mesh++) {
      let Meshes = meshes[Mesh];
      for (let Net = 0; Net < this.connection.length; Net++) {
        let net = this.connection[Net];

        if (
          net.partOneId === this.generateNetworkId(Meshes) ||
          net.partTwoId === this.generateNetworkId(Meshes)
        ) {
          for (let Route = 0; Route < net.connection.length; Route++) {
            let Routing = net.connection[Route];
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
  exportAsSchematic() {
    let assets = JSON.parse(JSON.stringify(this.data.assets));
    this.scene.rootNodes.filter((val) => {
      return this.data.assets.map((v, k) => {
        if (val.metadata) {
          if (v.partID === val.metadata.engineData.partID) {
            assets[k] = {
              ...val.metadata.engineData,
            };
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
          active: true,
          id: val.id,
        };
      });
      return v;
    });
    let obj = {
      connections: connection,
      assets: assets,
      net: this.data.nets,
      reuse: this.reuse,
    };
    return obj;
  },
  disposeEngine() {
    this.reuse = false;
    this.scene = null;
    this._engine = null;
    this.canvas = null;
    this.board = null;
    this.resolution = [20, 20];
    this.lastPositionWiring = null;
    this.clickedPinPath = null;
    this.gridResolution = 0.5;
    this.auxline = null;
    this.data = { assets: [], connection: [], nets: [] };
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
    this.tempMesh = [];
    this.Mesh2D = [];
    this.db = null;
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
