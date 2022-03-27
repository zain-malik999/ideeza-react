import { select, takeLatest, put, call } from "redux-saga/effects";
import {
  CREATE_NEW_PROJECT,
  handleMySelfLoader,
  handleMySelfProject,
  handleProjectModel,
} from "./action";
import { useFetch } from "service";
import { toast } from "react-toastify";
//API
const createProjectAsync = async (payload) =>
  await useFetch.post("user-projects/", payload);
const createUserProduct = async (payload) =>
  await useFetch.post("user-products/", payload);
//Watcher
export function* createNewProjectWatcher() {
  yield takeLatest(CREATE_NEW_PROJECT, createNewProjectWorker);
}
//Workder
function* createNewProjectWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const user = yield select(({ Auth }) => Auth?.user?.id);
      const post = {
        ...payload,
        is_private: false,
        user,
      };
      yield put(handleMySelfLoader());
      const Request = yield call(createProjectAsync, post);
      if (Request?.data) {
        const product = {
          ...payload,
          user,
          project_type: "user",
          user_project: Request?.data?.id,
        };
        const ProductRequest = yield call(createUserProduct, product);
        if (ProductRequest?.data) {
          yield put(handleMySelfLoader());
          yield put(handleMySelfProject());
          yield put(handleProjectModel());
          toast.success("Project Created Successfully!");
        }
      }
    } catch (error) {}
  }
}
