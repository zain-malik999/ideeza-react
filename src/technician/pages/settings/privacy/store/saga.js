import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { PUT_PRIVACY, onPrivacyPutSuccess } from "./action";
//API CALL
const putPrivacyDataAsync = async () =>
  await useFetch.put("accounts/change-privacy/", payload);
//Watcher Function
export function* putPrivacyDataWatcher() {
  yield takeLatest(PUT_PRIVACY, putPrivacyDataWorker);
}
//Worker Function
export function* putPrivacyDataWorker() {
  try {
    const request = yield call(putPrivacyDataAsync);
    if (request?.data) {
      yield put(onPrivacyPutSuccess(request?.data));
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}
