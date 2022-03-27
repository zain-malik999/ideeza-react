import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_ALL_PROJECTS,
  onAllProjectsGetSuccess,
  toggleLoader,
} from "./action";

//Api call
const getAllProjectsDataAsync = async () => {
  return await useFetch.get("user-projects/");
};
//watcher function

export function* getAllProjectsDatawatcher() {
  yield takeLatest(GET_ALL_PROJECTS, getAllProjectsDataWorker);
}
//worker function
function* getAllProjectsDataWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader());
      const request = yield call(getAllProjectsDataAsync);
      if (request?.data) {
        yield put(onAllProjectsGetSuccess(request?.data));
      }
      yield put(toggleLoader());
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
