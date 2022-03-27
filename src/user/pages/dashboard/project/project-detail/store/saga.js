import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_USER_PROJECTS, onGetProjectSucces } from "./action";

const getProjectDetailDataAsync = async (id) =>
  await useFetch.get(`/user-projects/${id}`);

export function* getProjectDatawatcher() {
  yield takeLatest(GET_USER_PROJECTS, getProjectWorker);
}

function* getProjectWorker(action) {
  if (action) {
    try {
      const request = yield call(getProjectDetailDataAsync, action?.payload);

      if (request?.data) {
        yield put(onGetProjectSucces(request?.data));
      }
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}
