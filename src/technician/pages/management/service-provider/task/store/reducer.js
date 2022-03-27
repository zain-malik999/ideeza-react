import { GET_SERVICE_PROVIDER_TASK_SUCCESS, TOGGLE_LOADER } from "./action";
const initState = {
  loader: false,
  data: [],
  count: 0,
  search: "",
};
const reducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_SERVICE_PROVIDER_TASK_SUCCESS: {
      return {
        ...state,
        data: action?.payload?.data,
      };
    }
    case TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
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
