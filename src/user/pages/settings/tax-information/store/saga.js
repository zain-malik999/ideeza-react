import { put, takeLatest, call } from "@redux-saga/core/effects";
import { useFetch } from "service";
import { GET_TAX_INFORMATION } from "./action";

//API
const getTaxInformationDataAsync = async (id) =>
  await useFetch.get(`/tax-information/${id}`);

//WATCHER
export function* getTaxInformationWacther() {
  yield takeLatest(GET_TAX_INFORMATION, getTaxInformationWorker);
}

//WORKER

function* getTaxInformationWorker(action) {
  if (action) {
    const payload = action?.payload;
    console.log(payload);
    try {
      const request = yield call(getTaxInformationDataAsync, payload);
      console.log("Request", request?.data);
    } catch (e) {}
  }
}
