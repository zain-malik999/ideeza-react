export const GET_PRIVATE_PROJECTS =
  "GET PRIVATE PROJECTS [IDEEZA][USER][PROJECT][HOME]";
export const GET_PRIVATE_PROJECTS_SUCCESS =
  "GET PRIVATE PROJECTS SUCCESS [IDEEZA][USER][PROJECT][HOME]";
export const GET_PUBLIC_PROJECTS =
  "GET PUBLIC PROJECTS [IDEEZA][USER][PROJECT][HOME]";
export const GET_PUBLIC_PROJECTS_SUCCESS =
  "GET PUBLIC PROJECTS SUCCESS [IDEEZA][USER][PROJECT][HOME]";

export const GET_CONTRIBUTE_PROJECTS =
  "GET CONTRIBUTE PROJECTS [IDEEZA][USER][PROJECT][HOME]";
export const GET_CONTRIBUTE_PROJECTS_SUCCESS =
  "GET CONTRIBUTE PROJECTS SUCCESS [IDEEZA][USER][PROJECT][HOME]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [SETTING][IDEEZA][USER][PROJECT][HOME]";
export const toggleLoader = (state) => {
  return {
    type: TOGGLE_LOADER,
    state,
  };
};
export const onGetPrivateProjects = () => {
  return {
    type: GET_PRIVATE_PROJECTS,
  };
};

export const onGetPrivateProjectsSuccess = (payload) => {
  return {
    type: GET_PRIVATE_PROJECTS_SUCCESS,
    payload,
  };
};

export const onGetPublicProjects = () => {
  return {
    type: GET_PUBLIC_PROJECTS,
  };
};

export const onGetPublicProjectsSuccess = (payload) => {
  return {
    type: GET_PUBLIC_PROJECTS_SUCCESS,
    payload,
  };
};

export const onContributeProjects = () => {
  return {
    type: GET_CONTRIBUTE_PROJECTS,
  };
};

export const onGetContributeProjectsSuccess = (payload) => {
  return {
    type: GET_CONTRIBUTE_PROJECTS_SUCCESS,
    payload,
  };
};
