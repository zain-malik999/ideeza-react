import { takeLatest, put, call, select } from "redux-saga/effects";
import { useFetch } from "service";
import { toast } from "react-toastify";
import {
  handleMySelfProject,
  handleMySelfLoader,
} from "../../../../../store/action";
import {
  GET_PRODUCT_DETAIL,
  BUY_PRODUCT,
  POST_COMMENT,
  UPDATE_PRODUCT,
  SHARE_NEWS_FEED,
  GET_PRODUCT_ELECTRONIC,
  onGetProductDeatilSuccess,
  onGetProductDeatil,
  getElectronicProductSuccess,
  getCoverProductSuccess,
  GET_PRODUCT_COVER,
} from "./action";

//API CALL
const getProductDetailDataAsync = async (id) =>
  await useFetch.get(`/user-products/${id}`);
const onBuyProductAsync = async (id) =>
  await useFetch.post(`/carts/buy-product/${id}/`);
const postCommentAsync = async (payload) =>
  await useFetch.post("user-product-comments/", payload);
const updateProductAsync = async (payload, id) =>
  await useFetch.patch(`user-products/${id}/`, payload);
const shareToNewsFeed = async (payload) =>
  await useFetch.post("news-feeds/", payload);
const getElectronicProductAsync = async (id) =>
  await useFetch.get("electronics-components/", {
    params: {
      user_product: id,
    },
  });
const getCoverProductAsync = async (id) =>
  await useFetch.get("cover-component/", {
    params: {
      user_product: id,
    },
  });
//watcher function
export function* getBuywatcher() {
  yield takeLatest(BUY_PRODUCT, getBuyDataWorker);
}
export function* getProductDetailDatawatcher() {
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailDataWorker);
}
export function* postCommentWatcher() {
  yield takeLatest(POST_COMMENT, postCommentWorker);
}
export function* updateProductWatcher() {
  yield takeLatest(UPDATE_PRODUCT, updateProductWorker);
}
export function* shareNewsFeedWatcher() {
  yield takeLatest(SHARE_NEWS_FEED, shareNewsFeedWorker);
}
export function* getElectronicProductWatcher() {
  yield takeLatest(GET_PRODUCT_ELECTRONIC, getElectronicProductWorker);
}
export function* getCoverProductWatcher() {
  yield takeLatest(GET_PRODUCT_COVER, getCoverProductWoker);
}
//Worker
function* getCoverProductWoker(action) {
  if (action) {
    const { id } = action;
    try {
      const request = yield call(getCoverProductAsync, id);
      if (request?.data) {
        yield put(getCoverProductSuccess(request?.data[0]));
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
}
function* getElectronicProductWorker(action) {
  if (action) {
    const { id } = action;
    try {
      const request = yield call(getElectronicProductAsync, id);
      if (request?.data) {
        const { results } = request?.data;
        if (results?.length > 0) {
          let payload = results[0];
          yield put(getElectronicProductSuccess(payload));
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  }
}
function* shareNewsFeedWorker(action) {
  if (action) {
    const { payload } = action;
    const user = yield select(({ Auth }) => Auth?.user?.id);
    const request = yield call(shareToNewsFeed, {
      ...payload,
      user,
    });
    if (request?.data) {
      toast.success("Product Shared Successfully!");
    }
  }
}
function* updateProductWorker(action) {
  if (action) {
    const { payload, id } = action;
    try {
      yield put(handleMySelfLoader());
      const request = yield call(updateProductAsync, payload, id);
      const popup = yield select(({ User }) => User?.project?.self?.model);
      yield put(handleMySelfLoader());
      if (request?.data) {
        toast.success("Product Updated Successfully!");
        yield put(onGetProductDeatil(id));
        if (popup) yield put(handleMySelfProject());
      }
    } catch (error) {}
  }
}
function* postCommentWorker(action) {
  if (action) {
    const { payload } = action;
    try {
      const user = yield select(({ Auth }) => Auth?.user?.id);
      const request = yield call(postCommentAsync, {
        ...payload,
        user,
        parent: null,
      });
      if (request?.data) {
        toast.success("Comment Post Successfully!");
      }
    } catch (error) {
      console.log("Error", error);
    }
  }
}
function* getProductDetailDataWorker(action) {
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

function* getBuyDataWorker(action) {
  if (action) {
    try {
      const request = yield call(onBuyProductAsync, action?.payload);
      if (request) {
        toast.success("Product Added Successfully");
      } else {
        toast.error("Product Already In Cart");
      }
    } catch (e) {
      toast.error("Product Already In Cart");
    }
  }
}
