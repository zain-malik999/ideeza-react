import { put, call, takeLatest, select } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_PARTS, getPartsSuccess, toggleLoader } from "./action";
//API
const getpartsAsync = async (params) =>
  await useFetch.get("/electronics/", { params: params });
//WATCHER
export function* getPartsWatcher() {
  yield takeLatest(GET_PARTS, getPartsWorker);
}
//WORKER
function* getPartsWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const searchKeyword = yield select(
        ({ AddPartsReducer }) => AddPartsReducer?.search
      );
      const { loader } = yield select(({ AddPartsReducer }) => AddPartsReducer);
      let params = {
        page: payload?.page || 1,
        search: payload?.search || searchKeyword,
        page_size: 1,
      };
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getpartsAsync, params);
      if (request?.data) {
        const data = {
          count: request?.data?.count,
          data: request?.data?.results,
        };
        yield put(getPartsSuccess(data));
      }
      yield put(toggleLoader());
    } catch (error) {
      console.log("error", error);
    }
  }
}
