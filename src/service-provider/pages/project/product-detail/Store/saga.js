import { takeLatest, put, call } from "redux-saga/effects";
import { useFetch } from "service";
import {
  GET_PRODUCT_DETAIL,
  BUY_PRODUCT,
  onGetProductDeatilSuccess,
} from "./action";
import { toast } from "react-toastify";

//API CALL

const getProductDetailDataAsync = async (id) =>
  await useFetch.get(`/user-products/${id}`);

const onBuyProductAsync = async (id) =>
  await useFetch.post(`/carts/buy-product/${id}/`);

//watcher function
export function* getBuywatcher() {
  yield takeLatest(BUY_PRODUCT, getBuyDataWorker);
}
export function* getProductDetailDatawatcher() {
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailDataWorker);
}

export function* getProductDetailDataWorker(action) {
  if (action) {
    try {
      const request = yield call(getProductDetailDataAsync, action?.payload);

      if (request?.data) {
        yield put(onGetProductDeatilSuccess(request?.data));
      }
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}

export function* getBuyDataWorker(action) {
  if (action) {
    try {
      const request = yield call(onBuyProductAsync, action?.payload);

      if (request?.data) {
        toast.success("Product Added To Card!");
      }
    } catch (e) {
      console.log("ERROOR", e);
    }
  }
}
