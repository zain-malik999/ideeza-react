import {
  GET_PRIVATE_PROJECTS_SUCCESS,
  GET_PUBLIC_PROJECTS_SUCCESS,
  GET_CONTRIBUTE_PROJECTS_SUCCESS,
  TOGGLE_LOADER,
} from "./action";

const initState = {
  private_projects: null,
  public_projects: null,
  contribute: null,
  privateLoader: false,
  publicLoader: false,
  contributeLoader: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRIVATE_PROJECTS_SUCCESS: {
      return {
        ...state,
        private_projects: action?.payload,
      };
    }
    case GET_PUBLIC_PROJECTS_SUCCESS: {
      return {
        ...state,
        public_projects: action?.payload,
      };
    }
    case GET_CONTRIBUTE_PROJECTS_SUCCESS: {
      return {
        ...state,
        contribute: action?.payload,
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
