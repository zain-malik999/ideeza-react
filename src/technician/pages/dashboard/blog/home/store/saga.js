import { toast } from "react-toastify";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { useFetch } from "service";
import { toggleLoad } from "../../store/action";
import { GET_BLOG, getBlogSuccess, onBlogGet, DELETE_BLOG } from "./action";
//API
const getBlogAsync = async (payload) =>
  await useFetch.get("/blog/", {
    params: payload,
  });
const deleteBlogAsync = async (id) => await useFetch.delete(`blog/${id}/`);
//WATCHER
export function* getBlogWatcher() {
  yield takeLatest(GET_BLOG, getBlogWorker);
}
export function* deleteBlogWatcher() {
  yield takeLatest(DELETE_BLOG, deleteBlogWoker);
}
//WORKER
function* getBlogWorker(action) {
  if (action) {
    try {
      const loader = yield select(({ Blog }) => Blog?.loader);
      const params = yield select(({ Blog }) => Blog?.params);
      if (!loader) {
        yield put(toggleLoad());
      }
      const request = yield call(getBlogAsync, params);
      if (request?.data) {
        const count = Math.ceil(request?.data?.count / 10);
        let data = request?.data;
        data = { ...data, count };
        yield put(getBlogSuccess(data));
      }
      yield put(toggleLoad());
    } catch (e) {
      console.log("ERROR", e.response);
    }
  }
}
function* deleteBlogWoker(action) {
  if (action) {
    try {
      const { payload } = action;
      const loader = yield select(({ Blog }) => Blog?.loader);
      if (!loader) {
        yield put(toggleLoad());
      }
      const request = yield call(deleteBlogAsync, payload);
      if (request?.data) {
        toast.success("Blog Post Deleted!");
        put(onBlogGet());
      }
      yield put(toggleLoad());
    } catch (error) {
      console.log("Error", error);
    }
  }
}
