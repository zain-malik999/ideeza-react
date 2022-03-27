import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_ALL_PROJECTS, onAllProjectsGetSuccess } from "./action";

//Api call
const getAllProjectsDataAsync = async (payload) => {
  return await useFetch.get("projects/", {
    params: payload,
  });
};
//watcher function

export function* getAllProjectsDatawatcher() {
  yield takeLatest(GET_ALL_PROJECTS, getAllProjectsDataWorker);
}
//worker function
function* getAllProjectsDataWorker(action) {
  if (action) {
    try {
      const request = yield call(getAllProjectsDataAsync);
      if (request?.data) {
        console.log(request?.data);
        const count = Math.ceil(request?.data?.count / 10);
        let data = request?.data;
        data = { ...data, count };
        yield put(onAllProjectsGetSuccess(data));
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
