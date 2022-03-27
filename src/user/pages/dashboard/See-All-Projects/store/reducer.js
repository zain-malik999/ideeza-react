import { GET_ALL_PROJECTS_SUCCESS, TOGGLE_LOADER } from "./action";
const initState = {
  project: null,
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case GET_ALL_PROJECTS_SUCCESS: {
      return {
        ...state,
        project: action?.payload,
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
