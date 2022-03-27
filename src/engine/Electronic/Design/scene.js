import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ElectronicIconBar } from "orgasms";
import Design from "./scene.config";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/inspector";

const Scene = forwardRef((props, ref) => {
  const { init, isBarShows, height } = props;
  const canvas = useRef(null);
  const [state, setState] = useState({});
  const [_engine, setEngine] = useState(null);
  const [_scene, setScene] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(true);
  const toggleBar = () => {
    return setToggle((state) => !state);
  };
  function createScene() {
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    _engine.setHardwareScalingLevel(1.0);
    _engine.enableOfflineSupport = false;
    _engine.setHardwareScalingLevel(1.0);
    _scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
    _scene.createDefaultCamera(true, true, true);
    _scene.createDefaultEnvironment({
      cameraContrast: 2,
      cameraExposure: 1,
      toneMappingEnabled: true,
      createGround: false,
      createSkybox: false,
    });
    _scene.activeCamera.beta = 0;
    _scene.activeCamera.radius = 30;
    _scene.activeCamera.minZ = 0;
    _scene.activeCamera.lowerRadiusLimit = 1;
    _scene.activeCamera.allowUpsideDown = true;
    _scene.activeCamera.noRotationConstraint = true;
    _scene.activeCamera.upperBetaLimit = _scene.activeCamera.lowerBetaLimit =
      _scene.activeCamera.beta;
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
    Design.init(_scene, {}, !isBarShows, toggleBar);
  }
  function disposeEngine() {
    Design.disposeEngine();
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
  useImperativeHandle(ref, () => ({
    save() {
      return Design.exportObj();
    },
  }));
  useEffect(() => {
    if (init) {
      if (JSON.stringify(init) !== JSON.stringify(state)) {
        setState(init);
      }
    }
  }, [init]);
  useEffect(() => {
    if (mounted) {
      if (state) {
        Design.importRuntime(state);
      }
    }
  }, [state, mounted]);
  return (
    <div
      id="engine"
      style={{ height: `${height}px` }}
      className="w-full relative"
    >
      {isBarShows ? (
        <ElectronicIconBar callbacks={Design} toggle={toggle} />
      ) : null}
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
  isBarShows: true,
  height: 700,
};
export default React.memo(Scene);
