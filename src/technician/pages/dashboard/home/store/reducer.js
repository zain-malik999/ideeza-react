import { GET_TASK_SUCCESS, TOGGLE_LOADER } from "./action";
const initState = {
  taskdata: [],
  loader: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TASK_SUCCESS: {
      return {
        ...state,
        taskdata: action?.payload,
      };
    }
    case TOGGLE_LOADER: {
      return { ...state, loader: !state.loader };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
