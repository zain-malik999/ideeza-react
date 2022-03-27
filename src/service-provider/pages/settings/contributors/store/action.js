export const GET_ADMIN =
  "GET ADMIN [IDEEZA][SERVICE-PROVIDER][SETTINGS][CONTRIBUTORS]";
export const GET_ADMIN_SUCCESS =
  "GET ADMIN SUCCESS [IDEEZA][SERVICE-PROVIDER][SETTINGS][CONTRIBUTORS]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][SERVICE-PROVIDER][SETTINGS][CONTRIBUTORS]";
export const onAdminGet = () => {
  return {
    type: GET_ADMIN,
  };
};
export const getAdminSuccess = (payload) => {
  return {
    type: GET_ADMIN_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
