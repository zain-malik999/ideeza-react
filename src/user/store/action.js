export const TOGGLE_PROJECT_MODEL = "HANDLE PROJECT MODEL [IDEEZA][USER]";
export const CREATE_NEW_PROJECT = "CREATE NEW PROJECT [IDEEZA][USER]";
export const TOGGLE_MY_SELF_PROJECT = "TOGGLE MY SELF PROJECT [IDEEZA][USER]";
export const TOGGLE_MY_SELF_LOADER = "TOGGLE MY SELF LOADER [IDEEZA][USER]";
export const handleProjectModel = (payload) => {
  return {
    type: TOGGLE_PROJECT_MODEL,
    payload,
  };
};
export const createNewProject = (payload) => {
  return {
    type: CREATE_NEW_PROJECT,
    payload,
  };
};
export const handleMySelfProject = () => {
  return {
    type: TOGGLE_MY_SELF_PROJECT,
  };
};
export const handleMySelfLoader = () => {
  return {
    type: TOGGLE_MY_SELF_LOADER,
  };
};
