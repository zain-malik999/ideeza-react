import { put, call, takeLatest, select } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_BlOGS_MANAGEMENT,
  getBlogsManagementSuccess,
  toggleLoader,
} from "./action";
//API
const getBlogsManagementAsync = async (params) =>
  await useFetch.get("/blog/", { params: params });
//WATCHER
export function* getBlogsManagementWatcher() {
  yield takeLatest(GET_BlOGS_MANAGEMENT, getBlogsManagementWorker);
}
//WORKER
function* getBlogsManagementWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const searchKeyword = yield select(
        ({ BlogsReducer }) => BlogsReducer?.search
      );
      const { loader } = yield select(({ BlogsReducer }) => BlogsReducer);
      const params = {
        page: payload?.page || 1,
        search: payload?.search || searchKeyword,
        page_size: 1,
      };
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getBlogsManagementAsync, params);
      if (request?.data) {
        const data = {
          count: request?.data?.count,
          data: request?.data?.results,
        };
        yield put(getBlogsManagementSuccess(data));
      }
      yield put(toggleLoader());
    } catch (error) {
      console.log("error", error);
    }
  }
}
