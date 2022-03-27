import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN, TOKEN_VERIFY } from "../constant";
import { useFetch } from "service";
import {
  onLoginSuccess,
  onTokenVerifyFailed,
  onTokenVerifySuccess,
} from "../action";
import JWT from "jsonwebtoken";
//USER VERIFY CALL
const userVerify = async (id) => await useFetch.get(`/accounts/users/${id}/`);
//API CALL
const loginAsync = async (payload) =>
  await useFetch.post("accounts/token/", payload);
//Watcher Function
export function* onLoginWatcher() {
  yield takeLatest(LOGIN, onLoginWorker);
}
export function* onTokenVerifyWatcher() {
  yield takeLatest(TOKEN_VERIFY, onTokenVerify);
}
//Worker Function
function* onTokenVerify(action) {
  if (action)
    try {
      let token = localStorage.getItem("Access_Token");
      let refresh_token = localStorage.getItem("Refresh_Token");
      if (token) {
        const decoded = JWT.decode(token);
        if (decoded) {
          let user = yield call(userVerify, decoded?.user_id);
          if (user?.data) {
            yield put(
              onTokenVerifySuccess({
                access_token: token,
                refresh_token: refresh_token,
                payload: user?.data,
                userType: user?.data?.user_type,
              })
            );
          } else {
            yield put(onTokenVerifyFailed());
            localStorage.clear();
          }
        } else {
          yield put(onTokenVerifyFailed());
          localStorage.clear();
        }
      }
    } catch (e) {
      console.log("ERROR", e);
    }
}
function* onLoginWorker(action) {
  if (action?.payload)
    try {
      let request = yield call(loginAsync, action?.payload);
      if (request?.data) {
        localStorage.setItem("Access_Token", request?.data?.access);
        localStorage.setItem("Refresh_Token", request?.data?.refresh);
        const decoded = JWT.decode(request?.data?.access);
        if (decoded) {
          let user = yield call(userVerify, decoded?.user_id);
          if (user?.data) {
            yield put(
              onLoginSuccess({
                access_token: request?.data?.access,
                refresh_token: request?.data?.refresh,
                payload: user?.data,
                userType: user?.data?.user_type,
              })
            );
          }
        }
      }
    } catch (e) {
      console.log("ERROR", e);
    }
}
