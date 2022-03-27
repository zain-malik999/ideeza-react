export const GET_ORDERS =
  "GET ORDERS [IDEEZA][SERVICE][PROVIDER][DASHBOARD][ORDER]";
export const GET_ORDERS_SUCCESS =
  "GET ORDERS SUCCESS [IDEEZA][SERVICE][PROVIDER][DASHBOARD][ORDER]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][SERVICE][PROVIDER][DASHBOARD][ORDER]";

export const getOrders = (payload) => {
  return {
    type: GET_ORDERS,
    payload,
  };
};
export const getOrdersSuccess = (payload) => {
  return {
    type: GET_ORDERS_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
