import { GET_CART_SUCCESS } from "./action";

const initState = {
  cart: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS: {
      return {
        ...state,
        cart: action?.payload,
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
