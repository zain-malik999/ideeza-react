function CoverCallback(state, Callback) {
  if (state.includes("#")) {
    Callback.changeColor(state);
    return state;
  }
  switch (state) {
    case "undo": {
      Callback.undo();
      return state;
    }
    case "redo": {
      Callback.redo();
      return state;
    }
    case "square": {
      Callback.createSquare();
      return state;
    }
    case "circle": {
      Callback.createCylinder();
      return state;
    }
    case "select": {
      Callback.changeMode("translate");
      return state;
    }
    case "rotate": {
      Callback.changeMode("rotate");
      return state;
    }
    case "scale": {
      Callback.changeMode("scale");
      return state;
    }
    case "360": {
      Callback.fullScreen();
      return "360";
    }
    case "coordinate": {
      Callback.toggleCoord();
      return state;
    }
    case "union": {
      Callback.setAction(state);
      return state;
    }
    case "intersection": {
      Callback.setAction(state);
      return state;
    }
    case "substract": {
      Callback.setAction(state);
      return state;
    }
    case "copy": {
      Callback.copyMesh();
      return state;
    }
    default: {
      return state;
    }
  }
}
export { CoverCallback };
