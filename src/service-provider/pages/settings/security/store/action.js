export const PUT_SECURITY = "PUT SECURITY [IDEEZA][USER][SETTINGS][SECURITY]";
export const PUT_SECURITY_SUCCESS =
  "PUT SECURITY SUCCESS [IDEEZA][USER][SETTINGS][SECURITY]";

export const GET_LOGIN_HISTORY =
  "GET LOGIN HISTORY [IDEEZA][USER][SETTINGS][LOGIN HISTORY]";
export const GET_LOGIN_HISTORY_SUCCESS =
  "GET LOGIN HISTORY SUCCESS [IDEEZA][USER][SETTINGS][LOGIN-HISTORY]";
export const TOGGLE_LOADER = "TOGGLE LOADER [IDEEZA][SETTINGS][LOGIN-HISTORY]";
export const onSecurityPut = (payload) => {
  return {
    type: PUT_SECURITY,
    payload,
  };
};
export const onSecurityPutSuccess = (payload) => {
  return {
    type: PUT_SECURITY_SUCCESS,
    payload,
  };
};

export const getLoginHistory = () => {
  return {
    type: GET_LOGIN_HISTORY,
  };
};
export const getLoginHistorySuccess = (payload) => {
  return {
    type: GET_LOGIN_HISTORY_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
