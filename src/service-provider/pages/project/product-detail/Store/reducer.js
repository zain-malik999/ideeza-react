import { GET_PRODUCT_DETAIL_SUCCESS } from "./action";

const initState = {
  projectDetail: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        projectDetail: action?.payload,
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
