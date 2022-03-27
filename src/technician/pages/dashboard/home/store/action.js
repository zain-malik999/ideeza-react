export const GET_TASK = "GET TECHNICIAN [IDEEZA][TECHNICIAN][DASHBOARD][HOME]";
export const GET_TASK_SUCCESS =
  "GET TECHNICIAN SUCCESS [IDEEZA][TECHNICIAN][DASHBOARD][HOME]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][TECHNICIAN][DASHBOARD][HOME] ";
export const onTaskGet = () => {
  return {
    type: GET_TASK,
  };
};
export const getTaskSuccess = (payload) => {
  return {
    type: GET_TASK_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
