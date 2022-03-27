export const GET_NEWS_FEED =
  "GET NEWS FEED [IDEEZA][USER][DASHBOARD][NEWS-FEED]";
export const GET_NEWS_FEED_SUCCESS =
  "GET NEWS FEED SUCCESS [IDEEZA][USER][DASHBOARD][NEWS-FEED]";
export const GET_USER_CONNECT =
  "GET USER CONNECT [IDEEZA][USER][DASHBOARD][NEWS-FEED]";
export const GET_USER_CONNECT_SUCCESS =
  "GET USER CONNECT SUCCESS [IDEEZA][USER][DASHBOARD][NEWS-FEED]";
export const CONNECT_USER =
  "CONNECT USER [IDEEZA][USER][DASHBOARD][NEWS-FEED] ";
export const POST_COMMENT = "POST COMMENT [IDEEZA][USER][DASHBOARD][NEWS-FEED]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][USER][DASHBOARD][NEWS-FEED]";
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const postComment = (payload) => {
  return {
    type: POST_COMMENT,
    payload,
  };
};
export const getNewsFeed = (params) => {
  return {
    type: GET_NEWS_FEED,
    payload: params,
  };
};

export const connectUsers = (id) => {
  return {
    type: CONNECT_USER,
    payload: id,
  };
};

export const getNewsFeedSuccess = (payload) => {
  return {
    type: GET_NEWS_FEED_SUCCESS,
    payload,
  };
};

export const onGetUserConnect = () => {
  return {
    type: GET_USER_CONNECT,
  };
};

export const onGetUserConnectSuccess = (payload) => {
  return {
    type: GET_USER_CONNECT_SUCCESS,
    payload,
  };
};
