import { takeLatest, call, put, select } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_PROJECT_REVIEW,
  toggleLoader,
  onProjectTrackingReviewSuccess,
} from "./action";

//API CALL
const getALLProjectReviewDataAsync = async (params) => {
  return await useFetch.get("/tracking-reviews/", {
    params: {
      ...params,
      page_size: 10,
    },
  });
};

//watcher function
export function* getALLProjectReviewDataWatcher() {
  yield takeLatest(GET_PROJECT_REVIEW, getALLProjectReviewDataWorker);
}
// worker function

function* getALLProjectReviewDataWorker(action) {
  if (action) {
    try {
      const { loader } = yield select(({ AllReviews }) => AllReviews);
      const { payload } = action;
      if (!loader) {
        yield put(toggleLoader());
      }
      const request = yield call(getALLProjectReviewDataAsync, payload);

      if (request?.data) {
        const payloads = {
          count: request?.data?.count,
          data: request?.data?.results,
          ...payload,
        };

        yield put(onProjectTrackingReviewSuccess(payloads));
      }

      yield put(toggleLoader());
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
