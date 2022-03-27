import { takeLatest, call, put } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_SERVICE_PROVIDER_SERVICE, onserviceSuccess } from "./action";

//API
const getAllServiceDataAsync = async (params) => {
  return await useFetch.get("/services/");
};

//WATCHER
export function* getAllServiceDataWatcher() {
  yield takeLatest(GET_SERVICE_PROVIDER_SERVICE, getAllServiceDataWorker);
}

//WORKER

function* getAllServiceDataWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const request = yield call(getAllServiceDataAsync, payload);
      if (request?.data) {
        const payloads = {
          //   count: request?.data?.count,
          data: request?.data,
          ...payload,
        };
        yield put(onserviceSuccess(payloads));
      }

      console.log("request", request?.data);
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
