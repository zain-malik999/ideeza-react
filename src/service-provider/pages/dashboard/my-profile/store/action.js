export const GET_PROFILE_DATA =
  "GET PROFILE DATA [IDEEZA][SERVICE][PROVIDER][DASHBOARD][MY PROFILE]";
export const GET_PROFILE_DATA_SUCCESS =
  "GET PROFILE DATA SUCCESS [IDEEZA][SERVICE][PROVIDER][DASHBOARD][MY PROFILE]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][SERVICE][PROVIDER][DASHBOARD][MY PROFILE]";

export const getProfileData = () => {
  return {
    type: GET_PROFILE_DATA,
  };
};
export const getProfileDataSuccesss = (payload) => {
  return {
    type: GET_PROFILE_DATA_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
