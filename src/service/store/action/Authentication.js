import {
  LOGIN,
  LOGIN_SUCCESS,
  TOKEN_VERIFY,
  TOKEN_VERIFY_FAILED,
  TOKEN_VERIFY_SUCCESS,
} from "../constant";
export const onLogin = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
export const onLoginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    ...payload,
  };
};
export const onTokenVerify = () => {
  return {
    type: TOKEN_VERIFY,
  };
};
export const onTokenVerifySuccess = (payload) => {
  return {
    type: TOKEN_VERIFY_SUCCESS,
    ...payload,
  };
};
export const onTokenVerifyFailed = () => {
  return {
    type: TOKEN_VERIFY_FAILED,
  };
};
