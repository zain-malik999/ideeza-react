import {
  NEXT_ELECTRONIC_STEP,
  PREVIOUS_ELECTRONIC_STEP,
  GET_ELECTRONIC_SCHEMATIC,
  GET_ELECTRONIC_DESGIN,
  GET_CATEOGRIES_SUCCESS,
  GET_ELECTRONIC_SIDEBAR_SUCCESS,
  HANDLE_LOADER,
  TOGGLE_POPUP,
  GET_ELECTRONIC_COMPONENT_SUCCESS,
  GET_COVER_SIDEBAR_SUCCESS,
  RESET_PAGE,
  GET_COVER_COMPONENT,
  GET_COVER_COMPONENT_SUCCESS,
  GET_PROJECT_DETAIL_SUCCESS,
} from "./action";
const init = {
  sidebar: [],
  electronic: {
    schematic: null,
    design: null,
    data: [],
  },
  cover: null,
  general: null,
  step: 0,
  category: [],
  popup: false,
  loader: false,
  tempCategory: [],
  importMesh: null,
  project: null,
};
const reducer = (state = init, action) => {
  switch (action?.type) {
    case GET_PROJECT_DETAIL_SUCCESS: {
      return {
        ...state,
        project: action?.payload,
      };
    }
    case RESET_PAGE: {
      return {
        ...state,
        sidebar: [],
        electronic: {
          schematic: null,
          design: null,
          data: [],
        },
        cover: null,
        general: null,
        step: 0,
        popup: false,
        loader: false,
        importMesh: null,
      };
    }
    case GET_ELECTRONIC_COMPONENT_SUCCESS: {
      return {
        ...state,
        importMesh: action?.payload,
        electronic: {
          ...state?.electronic,
          data: state?.electronic?.data.concat(action?.payload),
        },
      };
    }
    case GET_COVER_COMPONENT_SUCCESS: {
      return {
        ...state,
        importMesh: action?.payload,
      };
    }
    case GET_COVER_SIDEBAR_SUCCESS: {
      return {
        ...state,
        sidebar: action?.payload,
      };
    }
    case GET_ELECTRONIC_SIDEBAR_SUCCESS: {
      return {
        ...state,
        sidebar: action?.payload,
      };
    }
    case HANDLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
      };
    }
    case TOGGLE_POPUP: {
      return {
        ...state,
        popup: !state.popup,
      };
    }
    case GET_CATEOGRIES_SUCCESS: {
      return {
        ...state,
        category: action?.payload,
        tempCategory: action?.category,
      };
    }
    case NEXT_ELECTRONIC_STEP: {
      return {
        ...state,
        step: ++state.step,
      };
    }
    case PREVIOUS_ELECTRONIC_STEP: {
      return {
        ...state,
        step: --state.step,
      };
    }
    case GET_ELECTRONIC_SCHEMATIC: {
      return {
        ...state,
        electronic: {
          ...state.electronic,
          schematic: action?.payload,
        },
      };
    }
    case GET_ELECTRONIC_DESGIN: {
      return {
        ...state,
        electronic: {
          ...state.electronic,
          design: action?.payload,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
