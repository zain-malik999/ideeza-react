import React, { useRef, useState, useEffect, forwardRef } from "react";
import Cover from "./scene.config";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/inspector";

const Scene = forwardRef((props, ref) => {
  const { init, height } = props;
  const canvas = useRef(null);
  const [state, setState] = useState({});
  const [_engine, setEngine] = useState(null);
  const [_scene, setScene] = useState(null);
  const [mounted, setMounted] = useState(false);
  function createScene() {
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    _engine.setHardwareScalingLevel(1.0);
    _scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
    _scene.createDefaultCamera(true, true, true);
    _scene.createDefaultEnvironment({
      cameraContrast: 1,
      cameraExposure: 1,
      toneMappingEnabled: true,
      createGround: false,
      createSkybox: false,
    });
    _scene.activeCamera.checkCollisions = true;
    _scene.activeCamera.minZ = 0;
    _scene.activeCamera.lowerRadiusLimit = 1;
    _scene.activeCamera.allowUpsideDown = true;
    _scene.activeCamera.noRotationConstraint = true;
    _scene.activeCamera.wheelPrecision = 30;
    _scene.activeCamera.panningSensibility = 47;
    _scene.activeCamera.panningInertia = 0;
    const light = new BABYLON.HemisphericLight(
      "hemi",
      new BABYLON.Vector3(0, 1, 0),
      _scene
    );
    light.groundColor = BABYLON.Color3.White();
    light.specular = new BABYLON.Color3(0.5, 0.5, 0.5);
    _engine.runRenderLoop(() => {
      _scene.render();
    });
    window.addEventListener("resize", () => {
      if (_engine) {
        _engine.resize();
      }
    });
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
    _engine.resize();
  }

  function initCustomEngine() {
    Cover.init(_scene);
  }
  function disposeEngine() {
    Cover.disposeEngine();
  }
  useEffect(() => {
    if (!BABYLON.Engine.isSupported()) {
      alert("WebGL is not supported or it is disable on your browser!");
      return;
    }
    setEngine(
      new BABYLON.Engine(canvas.current, true, {
        preserveDrawingBuffer: true,
        stencil: true,
      })
    );
    return () => {
      disposeEngine();
      return setMounted(false);
    };
  }, []);
  useEffect(() => {
    if (_engine && _engine !== null) {
      setScene(new BABYLON.Scene(_engine));
      setMounted(true);
    }
  }, [_engine]);
  useEffect(() => {
    if (_scene && _scene !== null) {
      createScene();
      initCustomEngine();
    }
  }, [_scene]);
  useEffect(() => {
    if (init) {
      if (JSON.stringify(init) !== JSON.stringify(state)) {
        setState(init);
      }
    }
  }, [init]);
  useEffect(() => {
    if (state) {
      Cover.handleImport(state);
    }
  }, [state]);
  return (
    <div id="engine" style={{ height }} className="w-full relative">
      <canvas
        id="canvas"
        ref={canvas}
        style={{ width: "100%", height: "100%" }}
        width="100%"
      ></canvas>
    </div>
  );
});
Scene.defaultProps = {
  init: {},
  height: 500,
};
export default Scene;
