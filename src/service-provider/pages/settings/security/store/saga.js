import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import {
  PUT_SECURITY,
  onSecurityPutSuccess,
  GET_LOGIN_HISTORY,
  getLoginHistorySuccess,
  toggleLoader,
} from "./action";
import { toast } from "react-toastify";
//API CALL
const putSecurityDataAsync = async (payload) => {
  await useFetch.put("change-password/", payload);
};
const getLoginHistoryAsync = async () =>
  await useFetch.get("accounts/login-history/");
//Watcher Function
export function* putSecurityDataWatcher() {
  yield takeLatest(PUT_SECURITY, putSecurityDataWorker);
}
export function* getLoginHistoryWatcher() {
  yield takeLatest(GET_LOGIN_HISTORY, getLoginHistoryWorker);
}
//Worker Function
function* putSecurityDataWorker(action) {
  if (action) {
    try {
      const payload = action?.payload;
      const request = yield call(putSecurityDataAsync, payload);
      if (request?.data) {
        toast.success("Password Changed!");
        yield put(onSecurityPutSuccess(request?.data));
      } else {
        toast.error("Password Can Not Changed!");
      }
    } catch (e) {
      toast.error("Password Can Not Changed!");
      console.log("ERROR", e.response);
    }
  }
}
function* getLoginHistoryWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader());
      const request = yield call(getLoginHistoryAsync);
      if (request?.data) {
        yield put(getLoginHistorySuccess(request?.data));
        yield put(toggleLoader());
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
}
