import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { PUT_SECURITY, onSecurityPutSuccess } from "./action";
import { toast } from "react-toastify";
//API CALL
const putSecurityDataAsync = async (payload) =>
  await useFetch.put("change-password/", payload);
//Watcher Function
export function* putSecurityDataWatcher() {
  yield takeLatest(PUT_SECURITY, putSecurityDataWorker);
}
//Worker Function
export function* putSecurityDataWorker(action) {
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
