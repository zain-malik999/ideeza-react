import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  getProfileDataSuccesss,
  GET_PROFILE_DATA,
  toggleLoader,
} from "./action";

import { useFetch } from "service";

//API CALL
const getProfileAsync = async () => {
  return await useFetch.get("/service-provider/48");
};

export function* getProfileWatcher() {
  yield takeLatest(GET_PROFILE_DATA, getProfileWorker);
}

function* getProfileWorker(action) {
  if (action) {
    try {
      const request = yield call(getProfileAsync);
      if (request?.data) {
        yield put(getProfileDataSuccesss(request?.data));
      }
    } catch (e) {
      console.log("ERROR", e.response);
    }
  }
}

//    /service-provider/{id}
