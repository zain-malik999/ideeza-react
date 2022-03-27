import {
  GET_PROJECT_REVIEW_SUCCESS,
  TOGGLE_LOADER,
  GET_PROJECT_REVIEW,
} from "./action";
const initState = {
  data: [],
  loader: false,
  count: 0,
  page: 1,
};
const reducer = (state = initState, action) => {
  switch (action?.type) {
    case TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
      };
    }
    case GET_PROJECT_REVIEW: {
      return {
        ...state,
        ...action?.payload,
      };
    }
    case GET_PROJECT_REVIEW_SUCCESS: {
      return {
        ...state,
        data: action?.payload?.data,
        count: action?.payload?.count,
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
