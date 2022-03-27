export const GET_PROJECT_DETAIL =
  "GET PROJECT DETAIL [IDEEZA][SERVICE-PROVIDER][PROJECT][COVERAGE]";
export const GET_PROJECT_DETAIL_SUCCESS =
  "GET PROJECT DETAIL SUCCESS [IDEEZA][SERVICE-PROVIDER][PROJECT][COVERAGE]";
//Action
export const getProjectDetail = (id) => {
  return {
    type: GET_PROJECT_DETAIL,
    payload: id,
  };
};
export const getProjectDetailSuccess = (payload) => {
  return {
    type: GET_PROJECT_DETAIL_SUCCESS,
    payload,
  };
};
