import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { DELETE_ACCOUNT } from "./action";
//API
const deleteAccountAsync = async (id) =>
  await useFetch.delete(`/accounts/users/delete-account/${id}/`);
//watcher
export function* deleteAccountWatcher() {
  yield takeLatest(DELETE_ACCOUNT, deleteAccountWorker);
}

//worker
function* deleteAccountWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const loader = yield select(({ accounts }) => accounts?.loader);
      if (!loader) {
        yield put(toggleLoad());
      }
      const request = yield call(deleteAccountAsync, payload);
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
