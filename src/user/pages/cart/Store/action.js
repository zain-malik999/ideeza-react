export const GET_CART = "GET CART [IDEEZA][USER][CART]";
export const GET_CART_SUCCESS = "GET CART SUCCESS [IDEEZA][USER][CART]";

export const onGetCart = (id) => {
  return {
    type: GET_CART,
    payload: id,
  };
};

export const onGetCartSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};
