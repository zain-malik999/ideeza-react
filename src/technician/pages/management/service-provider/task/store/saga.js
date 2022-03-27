import { takeLatest, call, put, select } from "@redux-saga/core/effects";
import { useFetch } from "service";
import {
  GET_SERVICE_PROVIDER_TASK,
  onServiceProviderTaskSuccess,
} from "./action";

//Api call
const getAllTaskDataAsync = async (params) => {
  return await useFetch.get("/tasks/");
};
//Watcher

export function* getAllTaskDataWacher() {
  yield takeLatest(GET_SERVICE_PROVIDER_TASK, getAllTaskDataWorker);
}
//worker

function* getAllTaskDataWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const { loader } = yield select(({ TaskAllData }) => TaskAllData);

      const request = yield call(getAllTaskDataAsync, payload);
      if (request?.data) {
        const payloads = {
          data: request?.data,
          ...payload,
        };
        yield put(onServiceProviderTaskSuccess(payloads));

        console.log("request", request);
      }
      //yield put(toggleLoader());
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
