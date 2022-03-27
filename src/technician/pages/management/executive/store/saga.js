import { POST_EXECUTIVE } from "./action";
import { useFetch } from "service";
import { toast } from "react-toastify";
import { takeLatest, call, select } from "@redux-saga/core/effects";

const onPostExecutiveAsync = async (payload) =>
  await useFetch.post("/accounts/users/", payload);

export function* postExecutiveWatcher() {
  yield takeLatest(POST_EXECUTIVE, postExecutiveWorker);
}
function* postExecutiveWorker(action) {
  if (action) {
    try {
      // const user =yield select(({Auth})=>Auth?.user?.id);
      const data = action?.payload;
      //  data.append("user",user);
      const request = yield call(onPostExecutiveAsync, data);

      console.log("datadadadadadad", request);
      if (request?.data) {
        toast.success("Executive Added Successfully");
      }
    } catch (error) {
      console.log("ERROR EXECUTIVE", error);
    }
  }
}
