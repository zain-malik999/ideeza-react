import { call, delay, put, select, takeLatest } from "@redux-saga/core/effects";
import { getOrdersSuccess, GET_ORDERS, toggleLoader } from "./action";
import { useFetch } from "service";
//API
const getOrdersAsync = async (params) =>
  await useFetch.get("/orders/", {
    params: params,
  });
//Watcher
export function* getOrdersWatcher() {
  yield takeLatest(GET_ORDERS, getOrdersWorker);
  yield delay(500);
}
//Worker
function* getOrdersWorker(action) {
  if (action) {
    try {
      const searchKeyword = yield select(
        ({ ServiceProviderOrder }) => ServiceProviderOrder?.search
      );
      const { loader } = yield select(
        ({ ServiceProviderOrder }) => ServiceProviderOrder
      );
      const { payload } = action;
      let params = {
        page: payload?.page || 1,
        search: payload?.search || searchKeyword,
        page_size: 1,
      };
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getOrdersAsync, params);
      if (request?.data) {
        const payload = {
          count: request?.data?.count,
          data: request?.data?.results,
        };
        yield put(getOrdersSuccess(payload));
      }
      yield put(toggleLoader());
    } catch (error) {}
  }
}
