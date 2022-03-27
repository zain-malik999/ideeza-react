export const GET_PRODUCT_DETAIL =
  "GET PRODUCT DETAIL [IDEEZA][USER][PROJECT][DETAIL]";
export const GET_PRODUCT_DETAIL_SUCCESS =
  "GET PRODUCT DETAIL SUCCESS [IDEEZA][USER][PROJECT][DETAIL]";
export const BUY_PRODUCT = "BUY PRODUCT [IDEEZA][USER][PROJECT][DETAIL]";
export const POST_COMMENT = "POST COMMENT [IDEEZA][USER][PRODUCT][COMMENTS]";
export const UPDATE_PRODUCT = "UPDATE PRODUCT [IDEEZA][USER][PRODUCT]";
export const SHARE_NEWS_FEED = "SHARE NEWS FEED [IDEEZA][USER][PRODUCT]";
export const GET_PRODUCT_ELECTRONIC =
  "GET PRODUCT ELECTRONIC [IDEEZA][USER][PROJECT][PRODUCT]";
export const GET_PRODUCT_ELECTRONIC_SUCCESS =
  "GET PRODUCT ELECTRONIC SUCCESS [IDEEZA][USER][PROJECT][PRODUCT]";
export const GET_PRODUCT_COVER =
  "GET PRODUCT COVER [IDEEZA][USER][PROJECT][PRODUCT]";
export const GET_PRODUCT_COVER_SUCCESS =
  "GET PRODUCT COVER SUCCESS [IDEEZA][USER][PROJECT][PRODUCT]";
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

export const postComment = (payload) => {
  return {
    type: POST_COMMENT,
    payload,
  };
};

export const updateProduct = (payload, id) => {
  return {
    type: UPDATE_PRODUCT,
    payload,
    id,
  };
};
export const shareNewsFeed = (payload) => {
  return {
    type: SHARE_NEWS_FEED,
    payload,
  };
};
export const getElectronicProduct = (id) => {
  return {
    type: GET_PRODUCT_ELECTRONIC,
    id,
  };
};
export const getElectronicProductSuccess = (payload) => {
  return {
    type: GET_PRODUCT_ELECTRONIC_SUCCESS,
    payload,
  };
};
export const getCoverProduct = (id) => {
  return {
    type: GET_PRODUCT_COVER,
    id,
  };
};
export const getCoverProductSuccess = (payload) => {
  return {
    type: GET_PRODUCT_COVER_SUCCESS,
    payload,
  };
};
