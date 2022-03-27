import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import { GET_CART, onGetCartSuccess } from "./action";

//API CALL

const getCartDataAsync = async (id) =>
  await useFetch.get("/carts/my-cart/", {
    params: {
      user: id,
    },
  });

export function* getCartDatawatcher() {
  yield takeLatest(GET_CART, getCartDataWorker);
}

function* getCartDataWorker(action) {
  if (action) {
    try {
      const request = yield call(getCartDataAsync, action?.payload);

      if (request?.data) {
        yield put(onGetCartSuccess(request?.data));
      }
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}
