export const GET_ALL_PROJECTS =
  "GET ALL_PROJECTS [IDEEZA][SERVICE][PROVIDER][PROJECTS][SEE-ALL-PROJECT]";
export const GET_ALL_PROJECTS_SUCCESS =
  "GET ALL PROJECTS SUCCESS [IDEEZA][SERVICE][PROVIDER][PROJECTS][SEE-ALL-PROJECT]";

export const onAllProjectsGet = (payload = {}) => {
  return {
    type: GET_ALL_PROJECTS,
    payload,
  };
};
export const onAllProjectsGetSuccess = (payload, params = {}) => {
  return {
    type: GET_ALL_PROJECTS_SUCCESS,
    payload,
    params,
  };
};
