import { takeLatest, put, call, select } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_PRODUCTION_TRACKING,
  toggleLoader,
  onProductionTrackSuccess,
} from "./action";

//Api call
const getAllProductionDataAsync = async (params) => {
  return await useFetch.get("/user-project-trackings/", {
    params: {
      ...params,
      page_size: 10,
    },
  });
};

//watcher function

export function* getAllProductionDataWatcher() {
  yield takeLatest(GET_PRODUCTION_TRACKING, getAllProductionDataWorker);
}

//worker function
function* getAllProductionDataWorker(action) {
  if (action) {
    try {
      const { loader } = yield select(({ AllProduction }) => AllProduction);
      const { payload } = action;

      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getAllProductionDataAsync, payload);
      if (request?.data) {
        const payloads = {
          count: request?.data?.count,
          data: request?.data?.results,
          ...payload,
        };
        yield put(onProductionTrackSuccess(payloads));
      }
      yield put(toggleLoader());
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
