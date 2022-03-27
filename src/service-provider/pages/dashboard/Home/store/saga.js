import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  GetDashboardStatsSuccess,
  getDashboardSuccess,
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_STATS,
  toggleLoader,
} from "./action";
import { useFetch } from "service";
//API
const getDashboardAsync = async () =>
  await useFetch("accounts/service-provider-dashboard/");
const getDashboardStatsAsync = async () =>
  await useFetch("accounts/service-provider-dashboard/stats");
//Watcher
export function* getDashboardWatcher() {
  yield takeLatest(GET_DASHBOARD_DATA, getDashboardWorker);
}

//stats Watcher
export function* getDashboardStatsWatcher() {
  yield takeLatest(GET_DASHBOARD_STATS, getDashboardStats);
}
//Worker
function* getDashboardWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader());
      const request = yield call(getDashboardAsync);
      if (request?.data) {
        let obj = {
          count: request?.data?.count,
          data: request?.data?.results,
        };
        yield put(getDashboardSuccess(obj));
        yield put(toggleLoader());
      }
    } catch (error) {
      console.log("ERROR IN Dashboard", error);
    }
  }
}

//stats worker

function* getDashboardStats(action) {
  if (action) {
    try {
      const request = yield call(getDashboardStatsAsync);
      if (request?.data) {
        yield put(GetDashboardStatsSuccess(request?.data));
      }
    } catch (e) {
      console.log("Error", e.response);
    }
  }
}
