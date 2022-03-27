function Callback(state, Callback) {
  switch (state) {
    case "select": {
      Callback.setFunctionOption("move");
      return state;
    }
    case "connection": {
      Callback.setFunctionOption("connections");
      return state;
    }
    case "route": {
      Callback.setFunctionOption("route");
      return state;
    }
    case "rotate": {
      Callback.setFunctionOption("rotate");
      return rotate;
    }
    case "copy": {
      Callback.setFunctionOption("copy");
      return state;
    }
    case "delete": {
      Callback.setFunctionOption("delete");
      return state;
    }
    case "unroute": {
      Callback.setFunctionOption("delete");
      return state;
    }
    case "toggleScreen": {
      Callback.toggleView();
      return state;
    }
    case "totalLayers": {
      Callback.totalLayers();
      return state;
    }
    case "doDownload": {
      Callback.doDownload();
      return state;
    }
    case "selectLayer": {
      Callback.selectLayer();
      return state;
    }
    case "importRuntime": {
      Callback.importRuntime();
      return state;
    }
    case "toggleGrid": {
      Callback.toggleGrid();
      return state;
    }
    case "disposeEngine": {
      Callback.disposeEngine();
      return state;
    }
    case "exportSchematic": {
      return Callback.exportAsSchematic();
    }
    case "toggleView": {
      Callback.toggleView();
      return state;
    }
    default: {
      return state;
    }
  }
}
export { Callback };
