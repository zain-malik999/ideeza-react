import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_DASHBOARD, onDashboardGetSuccess, toggleLoading } from "./action";
//API CALL
const getDashboardDataAsync = async () =>
  await useFetch.get("accounts/dashboard/");
//Watcher Function
export function* getDashboardDataWatcher() {
  yield takeLatest(GET_DASHBOARD, getDashboardDataWorker);
}
//Worker Function
function* getDashboardDataWorker(action) {
  if (action) {
    try {
      yield put(toggleLoading());
      const request = yield call(getDashboardDataAsync);
      if (request?.data) {
        yield put(onDashboardGetSuccess(request?.data));
      }
      yield put(toggleLoading());
    } catch (e) {
      console.log("ERROR", e.response);
    }
  }
}
