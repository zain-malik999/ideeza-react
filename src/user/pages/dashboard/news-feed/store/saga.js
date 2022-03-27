import {
  getNewsFeedSuccess,
  GET_NEWS_FEED,
  CONNECT_USER,
  GET_USER_CONNECT,
  onGetUserConnectSuccess,
  POST_COMMENT,
  getNewsFeed,
  toggleLoader,
} from "./action";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { useFetch } from "service";
import { toast } from "react-toastify";
//API CALL
const getNewsFeedAsync = async (params) =>
  await useFetch.get("news-feeds/", {
    params: params,
  });
const getUserConnectDataAsync = async () => {
  return await useFetch.get("/accounts/get-users/");
};
const connectUserAsync = async (payload) => {
  return await useFetch.post("/accounts/add-connect/", {
    user: payload,
  });
};
const postCommentAsync = async (payload) =>
  await useFetch.post("news-feeds-comments/", payload);
//Watcher Function
export function* getNewsFeedWatcher() {
  yield takeLatest(GET_NEWS_FEED, getNewsFeedWorker);
}
export function* connectUserWatcher() {
  yield takeLatest(CONNECT_USER, connectUserWorker);
}
export function* getUserConnectWatcher() {
  yield takeLatest(GET_USER_CONNECT, getUserConnectWorker);
}
export function* postCommentsWatcher() {
  yield takeLatest(POST_COMMENT, postCommentWorker);
}
//Worker Funciton
function* postCommentWorker(action) {
  if (action) {
    const { payload } = action;
    const user = yield select(({ Auth }) => Auth?.user?.id);
    const body = {
      ...payload,
      user,
    };
    try {
      const request = yield call(postCommentAsync, body);
      if (request?.data) {
        yield put(getNewsFeed());
        toast.success("Comment Posted Successfully!");
      }
    } catch (error) {
      console.log("Error", error);
    }
  }
}
function* getNewsFeedWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader());
      const payload = action?.payload;
      const response = yield call(getNewsFeedAsync, payload);
      if (response?.data) {
        yield put(getNewsFeedSuccess(response?.data));
      }
      yield put(toggleLoader());
    } catch (error) {
      console.log("ERROR NEWSFEED", error);
    }
  }
}

function* getUserConnectWorker(action) {
  if (action) {
    try {
      const request = yield call(getUserConnectDataAsync);

      if (request?.data) {
        yield put(onGetUserConnectSuccess(request?.data?.split(0, 10)));
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}

function* connectUserWorker(action) {
  if (action) {
    try {
      yield call(connectUserAsync, action.payload);
    } catch (error) {
      console.log("ERROR NEWSFEED", error);
    }
  }
}
