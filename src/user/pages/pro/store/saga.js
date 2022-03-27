import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  GET_ELECTRONIC_SIDEBAR,
  GET_ELECTRONIC_SCHEMATIC,
  SAVE_PRO_SCHEMATIC,
  MUTATE_ELECTRONIC_SCHEMATIC,
  GET_ELECTRONIC_DESGIN,
  GET_CATEOGRIES,
  getElectronicSchematic,
  getCategorySuccess,
  onNextElectronic,
  toggleLoader,
  togglePopup,
  getElectronicSidebarSuccess,
  SAVE_COVER,
  GET_ELECTRONIC_COMPONENT,
  getElectronicComponentSuccess,
  GET_COVER_SIDEBAR,
  getCoverSidebarSuccess,
  GET_COVER_COMPONENT,
  getCoverComponentSuccess,
  GET_PROJECT_DETAIL,
  getProjectDetailSuccess,
} from "./action";
import { useFetch } from "service";
import { toast } from "react-toastify";
//API
let count = 1;
const getProjectDetailAync = async (id) =>
  await useFetch.get(`user-projects/${id}`);
const getElectronicSidebarAsync = async () =>
  await useFetch.get("electronics-components/sidebar-components/");
const getCategoryAsync = async () => await useFetch.get("categories/");
const saveElectronicComponentAsync = async (payload) =>
  await useFetch.post("electronics-components/", payload);
const saveCoverAsync = async (payload) =>
  await useFetch.post("cover-component/", payload);

const getElectronicComponentAsync = async (id) =>
  await useFetch.get(`electronics-components/${id}/`);
const getCoverComponentAsync = async (id) =>
  await useFetch.get(`cover-component/${id}/`);
//Watcher
export function* saveCoverWatcher() {
  yield takeLatest(SAVE_COVER, saveCoverWorker);
}
export function* electronicSidebarWatcher() {
  yield takeLatest(GET_ELECTRONIC_SIDEBAR, electronicSidebarWorker);
}
export function* electronicSchematicWatcher() {
  yield takeLatest(GET_ELECTRONIC_SCHEMATIC, electronicSchematicWorker);
}
export function* mutateElectronicSchematicStateWatcher() {
  yield takeLatest(
    MUTATE_ELECTRONIC_SCHEMATIC,
    mutateElectronicSchematicStateWorker
  );
}
export function* saveElectronicComponentWatcher() {
  yield takeLatest(GET_ELECTRONIC_DESGIN, saveElectronicComponentWorker);
}
export function* getElectronicCategoryWatcher() {
  yield takeLatest(GET_CATEOGRIES, getElectronicCategoryWorker);
}
export function* getElectronicComponentWatcher() {
  yield takeLatest(GET_ELECTRONIC_COMPONENT, getElectronicComponentWorker);
}
export function* getCoverSidebarWatcher() {
  yield takeLatest(GET_COVER_SIDEBAR, getCoverSidebarWorker);
}
export function* getCoverComponentWatcher() {
  yield takeLatest(GET_COVER_COMPONENT, getCoverComponentWorker);
}
export function* getProjectDetailWatcher() {
  yield takeLatest(GET_PROJECT_DETAIL, getProjectDetailWorker);
}
//Worker
function* getProjectDetailWorker(action) {
  if (action) {
    try {
      const { payload } = action;
      const request = yield call(getProjectDetailAync, payload);
      if (request?.data) {
        yield put(getProjectDetailSuccess(request?.data));
      }
    } catch (error) {}
  }
}
function* getCoverComponentWorker(action) {
  if (action) {
    const { payload } = action;
    try {
      const request = yield call(getCoverComponentAsync, payload);
      yield put(getCoverComponentSuccess(request?.data));
    } catch (error) {
      console.log("Error", error);
    }
  }
}
function* getCoverSidebarWorker(action) {
  if (action) {
    const category = yield select(({ Pro }) => Pro?.tempCategory);
    const side = yield call(findChild, category, "cover_components");
    yield put(getCoverSidebarSuccess(side));
  }
}
function* getElectronicComponentWorker(action) {
  if (action) {
    const { payload } = action;
    try {
      const request = yield call(getElectronicComponentAsync, payload);
      yield put(getElectronicComponentSuccess(request?.data));
    } catch (error) {
      console.log("Error", error);
    }
  }
}

function* saveCoverWorker(action) {
  if (action) {
    const { payload } = action;
    try {
      const user = yield select(({ Auth }) => Auth?.user?.id);
      const state = {
        ...payload,
        user,
        subcategory: 1,
        owner_type: "user",
        parent_component: null,
      };
      yield put(toggleLoader());
      const request = yield call(saveCoverAsync, state);
      if (request?.data) {
        yield put(togglePopup());
        yield put(toggleLoader());
        toast.success("Cover Saved Successfully!");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
}
function* saveElectronicComponentWorker(action) {
  if (action && count == 1) {
    try {
      const user = yield select(({ Auth }) => Auth?.user?.id);
      const request = yield call(saveElectronicComponentAsync, {
        ...action?.payload,
        user,
      });
      if (request?.data) {
        localStorage.removeItem(SAVE_PRO_SCHEMATIC);
        toast.success("Component Saved Successfully!");
        yield put(togglePopup());
        yield put(toggleLoader());
        yield put(onNextElectronic());
        count = 0;
      }
    } catch (error) {
      console.log("Electronic Component Error", e);
    }
  }
}
function* getElectronicCategoryWorker(action) {
  if (action) {
    try {
      const request = yield call(getCategoryAsync);
      if (request?.data) {
        const data = request?.data;
        let mutate = data.map((val) => {
          return {
            name: val?.name,
            value: val?.id,
          };
        });
        yield put(getCategorySuccess(mutate, data));
      }
    } catch (error) {
      console.log("Electronic Cataegory Error", error);
    }
  }
}
function* electronicSchematicWorker(action) {
  if (action) {
    const { payload } = action;
    if (payload) {
      let state = JSON.stringify(payload);
      localStorage.setItem(SAVE_PRO_SCHEMATIC, state);
    }
  }
}
function* mutateElectronicSchematicStateWorker(action) {
  if (action) {
    let state = localStorage.getItem(SAVE_PRO_SCHEMATIC);
    if (state) {
      state = JSON.parse(state);
      yield put(getElectronicSchematic(state));
    }
  }
}
function* electronicSidebarWorker(action) {
  if (action) {
    try {
      const category = yield select(({ Pro }) => Pro?.tempCategory);
      const side = yield call(findChild, category, "electronics");
      yield put(getElectronicSidebarSuccess(side));
    } catch (e) {
      console.log("Electronic Sidebar Error", e);
    }
  }
}
function findChild(val, key) {
  return val?.map((data) => {
    if (data?.children?.length > 0) {
      return {
        data: data[key],
        id: data?.id,
        children: [
          ...findChild(data?.children, key),
          {
            name: "public",
            data: data[key]?.public,
            id: guidGenerator(),
            children: data[key]?.public,
          },
          {
            name: "private",
            data: data[key]?.private,
            id: guidGenerator(),
            children: data[key]?.private,
          },
        ],
        name: data?.name,
      };
    }
    return {
      data: data[key],
      id: data?.id,
      children: [
        {
          name: "public",
          data: data[key]?.public,
          id: guidGenerator(),
          children: data[key]?.public,
        },
        {
          name: "private",
          data: data[key]?.private,
          id: guidGenerator(),
          children: data[key]?.private,
        },
      ],
      name: data?.name,
    };
  });
}
function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
