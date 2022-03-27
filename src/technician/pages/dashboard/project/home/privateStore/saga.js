import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_CONTRIBUTE_PROJECTS,
  GET_PRIVATE_PROJECTS,
  onGetContributeProjectsSuccess,
  onGetPrivateProjectsSuccess,
  toggleLoader,
} from "./action";
import { GET_PUBLIC_PROJECTS, onGetPublicProjectsSuccess } from "./action";

//API CALL

const getPrivateProjectDataAsync = async () =>
  await useFetch.get("user-projects/private/", {
    params: {
      limit: 6,
    },
  });

const getPublicProjectDataAsync = async () =>
  await useFetch.get("user-projects/public/", {
    params: {
      limit: 6,
    },
  });

const getContributeProjectDataAsync = async () =>
  await useFetch.get("user-projects/contributed/", {
    params: {
      limit: 6,
    },
  });

//watcher function
export function* getContributeProjectDatawatcher() {
  yield takeLatest(GET_CONTRIBUTE_PROJECTS, getContributeProjectDataWorker);
}

export function* getPrivateProjectDatawatcher() {
  yield takeLatest(GET_PRIVATE_PROJECTS, getPrivateProjectDataWorker);
}

export function* getPublicProjectDatawatcher() {
  yield takeLatest(GET_PUBLIC_PROJECTS, getPublicProjectDataWorker);
}

export function* getPrivateProjectDataWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader("privateLoader"));
      const request = yield call(getPrivateProjectDataAsync);
      if (request?.data) {
        yield put(onGetPrivateProjectsSuccess(request?.data));
      }
      yield put(toggleLoader("privateLoader"));
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}

function* getPublicProjectDataWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader("publicLoader"));
      const request = yield call(getPublicProjectDataAsync);
      if (request?.data) {
        yield put(onGetPublicProjectsSuccess(request?.data));
      }
      yield put(toggleLoader("publicLoader"));
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}

function* getContributeProjectDataWorker(action) {
  if (action) {
    try {
      yield put(toggleLoader("contributeLoader"));
      const request = yield call(getContributeProjectDataAsync);
      if (request?.data) {
        yield put(onGetContributeProjectsSuccess(request?.data));
      }
      yield put(toggleLoader("contributeLoader"));
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}
