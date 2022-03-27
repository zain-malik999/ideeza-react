import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_CATEGORIES, getCategoriesSuccess } from "./action";

const getCategoriesAsync = async () => await useFetch.get("/blog-categories/");
export function* getCategoriesWatcher() {
  yield takeLatest(GET_CATEGORIES, getCategoriesData);
}

export function* getCategoriesData(action) {
  if (action) {
    try {
      const request = yield call(getCategoriesAsync);

      if (request?.data) {
        yield put(getCategoriesSuccess(request?.data));
      }
    } catch (e) {
      console.log("ERROR", e.response);
    }
  }
}
