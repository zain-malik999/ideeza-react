import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_ADMIN, getAdminSuccess } from "./action";
//API
const getAdminAsync = async () =>
  await useFetch.get("/serviceprovider/agents/${3}");
//WATCHER
export function* getAdminWatcher() {
  yield takeLatest(GET_ADMIN, getAdminData);
}
//WORKER
function* getAdminData(action) {
  if (action) {
    try {
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getAdminAsync);
      console.log(request, "data");
      if (request?.data) {
        console.log("data");
        yield put(getAdminSuccess(request?.data));
      }
      yield put(toggleLoader());
    } catch (e) {
      console.log("ERROR", e.response);
    }
  }
}
