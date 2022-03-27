export const GET_SERVICE_PROVIDER_TASK =
  "GET SERVICE PROVIDER TASK [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][TASK]";
export const GET_SERVICE_PROVIDER_TASK_SUCCESS =
  "GET SERVICE PROVIDER TASK SUCCESS [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][TASK]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][TASK]";
export const onServiceProviderTask = (payload) => {
  return {
    type: GET_SERVICE_PROVIDER_TASK,
    payload,
  };
};
export const onServiceProviderTaskSuccess = (payload) => {
  return {
    type: GET_SERVICE_PROVIDER_TASK_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
