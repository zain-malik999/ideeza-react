export const GET_USER_PROJECTS =
  "GET USER PROJECTS [USER][PROJECTS][PROJECT_DETAIL]";
export const GET_USER_PROJECTS_SUCCES =
  "GET USER PROJECTS SUCCES [USER][PROJECTS][PROJECT_DETAIL]";

export const onGetProduct = (id) => {
  return {
    type: GET_USER_PROJECTS,
    payload: id,
  };
};
export const onGetProjectSucces = (payload) => {
  return {
    type: GET_USER_PROJECTS_SUCCES,
    payload,
  };
};
