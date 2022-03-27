/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as BABYLON from "@babylonjs/core";
import { attachImgToId } from "service";
import "@babylonjs/core/Meshes/meshBuilder";
import "@babylonjs/loaders";
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
  _scene: null,
  _engine: null,
  canvas: null,
  data: null,
  async init(scene) {
    scene.collisionsEnabled = true;
    this._scene = scene;
    this._engine = scene.getEngine();
    this.canvas = this._engine.getRenderingCanvas();
    this.data = {};
    this._scene.activeCamera.beta = -(Math.PI / 2) * 180;
    this._scene.activeCamera.alpha = Math.PI / 2;
    this._scene.activeCamera.radius = 150;
  },
  async handleImport(engineData) {
    this?._engine?.displayLoadingUI();
    const decode = await attachImgToId(engineData.url, true, true);
    this?._engine?.hideLoadingUI();
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
      return meshes[0];
    }
  },
  fullScreen() {
    var el = document.getElementById("engine");
    el.requestFullscreen();
  },
  disposeEngine() {
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
