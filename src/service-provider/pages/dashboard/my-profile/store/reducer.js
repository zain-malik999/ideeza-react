import { GET_PROFILE_DATA_SUCCESS, TOGGLE_LOADER } from "./action";

const initState = {
  data: [],
  loader: false,
};

const reducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_PROFILE_DATA_SUCCESS: {
      return {
        ...state,
        ...action?.payload,
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
