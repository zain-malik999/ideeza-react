import { takeLatest, call, put } from "redux-saga/effects";
import { useFetch } from "service";

import {
  GET_SERVICE_PROVIDER_MACHINE,
  onServiceProviderMachineSuccess,
} from "./action";

//API CALL
const getAllMachineDataAsync = async (params) => {
  return await useFetch.get("/machine/");
};

//WATCHER

export function* getALLMachineDataWatcher() {
  yield takeLatest(GET_SERVICE_PROVIDER_MACHINE, getAllMachineDataWorker);
}

//WORKER

function* getAllMachineDataWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const request = yield call(getAllMachineDataAsync, payload);
      if (request?.data) {
        const payloads = {
          data: request?.data,
          ...payload,
        };
        yield put(onServiceProviderMachineSuccess(payloads));
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
