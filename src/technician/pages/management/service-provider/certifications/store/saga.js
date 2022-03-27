import { put, call, takeLatest, select } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_CERTIFICATION,
  getCertificationSuccess,
  toggleLoader,
} from "./action";
//API
const getCertificationAsync = async (params) =>
  await useFetch.get("/certifications/", { params: params });
//WATCHER
export function* getCertificationsWatcher() {
  yield takeLatest(GET_CERTIFICATION, getCertificationWorker);
}
//WORKER
function* getCertificationWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const { loader } = yield select(
        ({ CertificationReducer }) => CertificationReducer
      );
      const searchKeyword = yield select(
        ({ CertificationReducer }) => CertificationReducer?.search
      );
      let params = {
        page: payload?.page || 1,
        search: payload?.search || searchKeyword,
        page_size: 1,
      };
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getCertificationAsync, params);
      if (request?.data) {
        const data = {
          count: request?.data?.count,
          data: request?.data?.results,
        };
        yield put(getCertificationSuccess(data));
      }
      yield put(toggleLoader());
    } catch (error) {
      console.log("error", error);
    }
  }
}
