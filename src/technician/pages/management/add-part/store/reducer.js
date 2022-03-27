import { GET_PARTS_SUCCESS, TOGGLE_LOADER } from "./action";
const initState = {
  count: 0,
  partsdata: [],
  loader: false,
  search: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PARTS_SUCCESS: {
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
