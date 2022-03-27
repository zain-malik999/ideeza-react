import { takeLatest, put, call, select } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_NOTES,
  GET_PROJECT,
  SAVE_NOTES,
  GET_USER,
  getProjectSuccess,
  onGetNotesSuccess,
  getUsersSuccess,
} from "./action";
import { toast } from "react-toastify";

//Api call
const uploadAttachment = async (payload) =>
  await useFetch.post("note-attachments/", payload);
const getNotesDataAsync = async (params) => {
  return await useFetch.get("notes/", {
    params,
  });
};
const getProjectsAsync = async (payload) => {
  return await useFetch.get("user-projects/", {
    params: {
      user: payload,
    },
  });
};
const saveNoteAsync = async (payload) => {
  return await useFetch.post("notes/", payload);
};
const getUsersAsync = async () => {
  return await useFetch.get("accounts/get-users/");
};
//watcher function
export function* getNotesDataWatcher() {
  yield takeLatest(GET_NOTES, getNotesDataWorker);
}
export function* getProjectWatcher() {
  yield takeLatest(GET_PROJECT, getProjectWorker);
}
export function* saveProjectWatcher() {
  yield takeLatest(SAVE_NOTES, saveProjectWorker);
}
export function* getUserWatcher() {
  yield takeLatest(GET_USER, getUsersWorker);
}
//worker function
function* getUsersWorker(action) {
  if (action) {
    try {
      let request = yield call(getUsersAsync);
      if (request?.data) {
        yield put(getUsersSuccess(request?.data));
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
}
function* saveProjectWorker(action) {
  if (action) {
    const { payload } = action;
    try {
      const user = yield select(({ Auth }) => Auth?.user?.id);
      const data = {
        ...payload,
        created_by: user,
      };
      const request = yield call(saveNoteAsync, data);
      if (request?.data) {
        toast.success("Notes Saved Successfully!");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
}
function* getProjectWorker(action) {
  try {
    const user = yield select(({ Auth }) => Auth?.user?.id);
    const request = yield call(getProjectsAsync, user);
    if (request?.data) {
      const category = request?.data?.map((v) => {
        return {
          name: v?.title,
          value: v?.id,
        };
      });
      yield put(getProjectSuccess(category));
    }
  } catch (error) {
    console.log("Error", error);
  }
  if (action) {
  }
}
function* getNotesDataWorker(action) {
  if (action) {
    const { payload } = action;
    try {
      const request = yield call(getNotesDataAsync, payload);
      if (request?.data) {
        yield put(onGetNotesSuccess(request?.data));
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}
