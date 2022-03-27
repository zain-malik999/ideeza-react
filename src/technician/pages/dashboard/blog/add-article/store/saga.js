import { takeLatest, call, select } from "redux-saga/effects";
import { POST_BLOG } from "./action";
import { useFetch } from "service";
import { toast } from "react-toastify";
import { push } from "react-router-redux";

const onPostBlogAsync = async (payload) =>
  await useFetch.post("/blog/", payload);

export function* postBlogWatcher() {
  yield takeLatest(POST_BLOG, PostBlogData);
}

function* PostBlogData(action) {
  if (action) {
    try {
      const user = yield select(({ Auth }) => Auth?.user?.id);
      const data = action?.payload;
      data.append("user", user);
      const request = yield call(onPostBlogAsync, data);
      if (request?.data) {
        toast.success("Blog Added Successfully!");
        yield push("/dashboard/blog/home");
      }
    } catch (error) {
      console.log("ERROR NEWSFEED", error);
    }
  }
}
