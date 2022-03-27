export const GET_ALL_PROJECTS =
  "GET ALL_PROJECTS [IDEEZA][USER][DASHBOARD][SEE-ALL-PROJECT]";
export const GET_ALL_PROJECTS_SUCCESS =
  "GET ALL PROJECTS SUCCESS [IDEEZA][USER][DASHBOARD][SEE-ALL-PROJECT]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][DASHBOARD][SEE-ALL-PROJECT]";
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const onAllProjectsGet = () => {
  return {
    type: GET_ALL_PROJECTS,
  };
};
export const onAllProjectsGetSuccess = (payload) => {
  return {
    type: GET_ALL_PROJECTS_SUCCESS,
    payload,
  };
};
