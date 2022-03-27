// Anything exported from this file is importable by other in-browser modules.
import Store from "./store";
import axios from "axios";
import Gizmo from "./common/grizmo";
import * as Actions from "./store/action";
import { withReducer } from "./store/withReducer";
import { attachImgToId, getDb, getDb2 } from "./common/engine";
import { Callback } from "./common/callback";
import { CoverCallback } from "./common/coverCallback";
const useFetch = axios.create({
  baseURL: "https://devapi.ideeza.com/api/v1",
});
useFetch.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    if (localStorage.getItem("Access_Token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "Access_Token"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

useFetch.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      // your failure logic
    }
    return response;
  },
  async function (err) {
    const originalRequest = err.config;
    if (
      (err.response.status === 401 || err.response.status === 400) &&
      originalRequest.url.includes("/accounts/token/refresh/")
    ) {
      localStorage.clear();
      Store({}).dispatch(Actions.onTokenVerifyFailed());
      return;
    } else if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("Refresh_Token");
      if (
        refreshToken !== undefined &&
        refreshToken !== null &&
        refreshToken !== "undefined"
      ) {
        let response = await axios.post(
          "https://api.ideeza.com/api/v1/accounts/token/refresh/",
          {
            refresh: refreshToken,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Access_Token")}`,
            },
          }
        );
        if (response.status === 200 || response.status === 201) {
          localStorage.setItem("Refresh_Token", response?.data?.refresh);
          localStorage.setItem("Access_Token", response?.data?.access);
          return useFetch.request(originalRequest);
        } else {
          localStorage.clear();
          Store({}).dispatch(Actions.onTokenVerifyFailed());
        }
      }
    }
  }
);
export {
  useFetch,
  withReducer,
  Callback,
  Actions,
  Store,
  attachImgToId,
  getDb,
  Gizmo,
  CoverCallback,
  getDb2,
};
