import { call, put, takeLatest } from "@redux-saga/core/effects";
import { useFetch } from "service";
import { GET_PROJECT_DETAIL, getProjectDetailSuccess } from "./action";
//API

const getProjectDetailAsync = async (id) =>
  await useFetch.get(`/projects/${id}`);

//Watcher
export function* getProjectDetailWatcher() {
  yield takeLatest(GET_PROJECT_DETAIL, getProjectDetailWorker);
}

//Worker
function* getProjectDetailWorker(action) {
  if (action) {
    const payload = action?.payload;
    try {
      const request = yield call(getProjectDetailAsync, payload);
      if (request?.data) {
        yield put(getProjectDetailSuccess(request?.data));
      }
    } catch (error) {}
  }
}
