export const GET_ELECTRONIC_SIDEBAR =
  "GET ELECTRONIC SIDEBAR [USER][PRO][ELECTRONIC]";
export const GET_ELECTRONIC_SIDEBAR_SUCCESS =
  "GET ELECTRONIC SIDEBAR SUCCESS [USER][PRO][ELECTRONIC]";
export const NEXT_ELECTRONIC_STEP =
  "NEXT ELECTRONIC STEP [USER][PRO][NEXT][ELECTRONIC][STEP]";
export const PREVIOUS_ELECTRONIC_STEP =
  "PREVIOUS ELECTRONIC STEP [USER][PRO][PREVIOUS][STEP]";
export const GET_ELECTRONIC_SCHEMATIC =
  "GET ELECTRONIC SCHEMATIC [USER][PRO][GET][ELECTRONIC][SCHEMATIC]";
export const MUTATE_ELECTRONIC_SCHEMATIC =
  "MUTATE ELETRONIC SCHEMATE [USER][PRO][ELECTRONIC][SCHEMATIC]";
export const GET_ELECTRONIC_DESGIN =
  "GET ELECTRONIC DESIGN [USER][PRO][ELECTRONIC][DESIGN]";
export const GET_CATEOGRIES = "GET CATEGORIES [USER][PRO]";
export const GET_CATEOGRIES_SUCCESS = "GET CATEGORIES SUCCESSS [USER][PRO]";
export const SAVE_PRO_SCHEMATIC = "PRO/SCHEMATIC";
export const HANDLE_LOADER = "HANDLE API LOADER [USER][PRO]";
export const TOGGLE_POPUP = "TOGGLE POP [USER][PRO]";
export const SAVE_COVER = "SAVE COVER [USER][PRO][COVER]";
export const GET_ELECTRONIC_COMPONENT =
  "GET ELECTRONIC COMPONENT [USER][PRO][ELECTRONIC]";
export const GET_ELECTRONIC_COMPONENT_SUCCESS =
  "GET ELECTRONIC COMPONENT SUCCESS [USER][PRO][ELECTRONIC]";
export const GET_COVER_SIDEBAR = "GET COVER SIDEBAR [USER][PRO][ELECTRONIC]";
export const GET_COVER_SIDEBAR_SUCCESS =
  "GET COVER SIDEBAR SUCCESS [USER][PRO][ELECTRONIC]";
export const GET_COVER_COMPONENT = "GET COVER COMPONENT [USER][PRO][COVER]";
export const GET_COVER_COMPONENT_SUCCESS =
  "GET COVER COMPONENT SUCCESS [USER][PRO][COVER]";
export const RESET_PAGE = "PAGE RESET [USER][PRO][COVER]";
export const GET_PROJECT_DETAIL = "GET PROJECT DETAIL [USER][PRO]";
export const GET_PROJECT_DETAIL_SUCCESS =
  "GET PROJECT DETAIL SUCCESS [USER][PRO]";
//Actions
export const getProjectDetail = (payload) => {
  return {
    type: GET_PROJECT_DETAIL,
    payload,
  };
};
export const getProjectDetailSuccess = (payload) => {
  return {
    type: GET_PROJECT_DETAIL_SUCCESS,
    payload,
  };
};
export const restPage = () => {
  return {
    type: RESET_PAGE,
  };
};
export const getCoverComponent = (payload) => {
  return {
    type: GET_COVER_COMPONENT,
    payload,
  };
};
export const getCoverComponentSuccess = (payload) => {
  return {
    type: GET_COVER_COMPONENT_SUCCESS,
    payload,
  };
};
export const getCoverSidebar = () => {
  return {
    type: GET_COVER_SIDEBAR,
  };
};
export const getCoverSidebarSuccess = (payload) => {
  return {
    type: GET_COVER_SIDEBAR_SUCCESS,
    payload,
  };
};
export const getElectronicComponent = (payload) => {
  return {
    type: GET_ELECTRONIC_COMPONENT,
    payload,
  };
};
export const getElectronicComponentSuccess = (payload) => {
  return {
    type: GET_ELECTRONIC_COMPONENT_SUCCESS,
    payload,
  };
};
export const saveCover = (payload) => {
  return {
    type: SAVE_COVER,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: HANDLE_LOADER,
  };
};
export const togglePopup = () => {
  return {
    type: TOGGLE_POPUP,
  };
};
export const mutateElectronicSchematicState = () => {
  return {
    type: MUTATE_ELECTRONIC_SCHEMATIC,
  };
};
export const getElectronicSidebar = () => {
  return {
    type: GET_ELECTRONIC_SIDEBAR,
  };
};
export const getElectronicSidebarSuccess = (payload) => {
  return {
    type: GET_ELECTRONIC_SIDEBAR_SUCCESS,
    payload,
  };
};
export const onNextElectronic = () => {
  return {
    type: NEXT_ELECTRONIC_STEP,
  };
};
export const onPreviousElectronic = () => {
  return {
    type: PREVIOUS_ELECTRONIC_STEP,
  };
};
export const getElectronicSchematic = (payload) => {
  return {
    type: GET_ELECTRONIC_SCHEMATIC,
    payload,
  };
};
export const getElectronicDesign = (payload) => {
  return {
    type: GET_ELECTRONIC_DESGIN,
    payload,
  };
};
export const getCategory = () => {
  return {
    type: GET_CATEOGRIES,
  };
};
export const getCategorySuccess = (payload, category) => {
  return {
    type: GET_CATEOGRIES_SUCCESS,
    payload,
    category,
  };
};
