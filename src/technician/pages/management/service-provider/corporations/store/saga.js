import { put, call, takeLatest, select } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_CORPORATIONS,
  getCorporationSuccesss,
  toggleLoader,
} from "./action";
//API
const getCorporationAsync = async (params) =>
  await useFetch.get("/corporations/", { params: params });
//WATCHER
export function* getCorporationWatcher() {
  yield takeLatest(GET_CORPORATIONS, getCorporationWorker);
}
//WORKER
function* getCorporationWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const { loader } = yield select(
        ({ CorporationReducer }) => CorporationReducer
      );
      const searchKeyword = yield select(
        ({ CorporationReducer }) => CorporationReducer?.search
      );
      let params = {
        page: payload?.page || 1,
        search: payload?.search || searchKeyword,
        page_size: 1,
      };
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getCorporationAsync, params);
      if (request?.data) {
        const data = {
          count: request?.data?.count,
          data: request?.data?.results,
        };
        yield put(getCorporationSuccesss(data));
      }
      yield put(toggleLoader());
    } catch (error) {}
  }
}
