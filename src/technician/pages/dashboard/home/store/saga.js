import { put, call, takeLatest, delay, select } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_TASK, getTaskSuccess, toggleLoader } from "./action";
//API
const getTaskAsync = async () => await useFetch.get("/tasks/");
//WATCHER
export function* getTaskWatcher() {
  yield takeLatest(GET_TASK, getTaskData);
  yield delay(500);
}
//WORKER
function* getTaskData(action) {
  if (action) {
    try {
      const { loader } = yield select(({ TechnicianTask }) => TechnicianTask);
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getTaskAsync);
      if (request?.data) {
        yield put(getTaskSuccess(request?.data));
      }
      yield put(toggleLoader());
    } catch (error) {}
  }
}
