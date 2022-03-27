import {
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_ELECTRONIC_SUCCESS,
  GET_PRODUCT_COVER_SUCCESS,
} from "./action";

const initState = {
  projectDetail: null,
  electronic: null,
  general: null,
  cover: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_COVER_SUCCESS: {
      return {
        ...state,
        cover: action?.payload,
      };
    }
    case GET_PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        projectDetail: action?.payload,
      };
    }
    case GET_PRODUCT_ELECTRONIC_SUCCESS: {
      return {
        ...state,
        electronic: action?.payload,
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
