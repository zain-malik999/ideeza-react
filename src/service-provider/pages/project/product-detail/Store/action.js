export const GET_PRODUCT_DETAIL =
  "GET PRODUCT DETAIL [IDEEZA][USER][PROJECT][DETAIL]";
export const GET_PRODUCT_DETAIL_SUCCESS =
  "GET PRODUCT DETAIL SUCCESS [IDEEZA][USER][PROJECT][DETAIL]";

export const BUY_PRODUCT = "BUY PRODUCT [IDEEZA][USER][PROJECT][DETAIL]";

export const onBuyProduct = (id) => {
  return {
    type: BUY_PRODUCT,
    payload: id,
  };
};

export const onGetProductDeatil = (id) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: id,
  };
};

export const onGetProductDeatilSuccess = (payload) => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload,
  };
};
