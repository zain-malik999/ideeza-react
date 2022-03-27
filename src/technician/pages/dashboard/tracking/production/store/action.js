export const GET_PRODUCTION_TRACKING =
  "GET PRODUCTION TRACKING [IDEEZA][TECHNICIAN][DASHBOARD][TRACKING][PRODUCTION]";
export const GET_PRODUCTION_TRACKING_SUCCESS =
  "GET PRODUCTION TRACKING SUCCESS [IDEEZA][TECHNICIAN][DASHBOARD][TRACKING][PRODUCTION]";
export const TOGGLE_LOADER =
  "TOGGLE_LOADER [IDEEZA][TECHNICIAN][DASHBOARD][TRACKING][PRODUCTION]";
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const onProductionTrack = (payload) => {
  return {
    type: GET_PRODUCTION_TRACKING,
    payload,
  };
};
export const onProductionTrackSuccess = (payload) => {
  return {
    type: GET_PRODUCTION_TRACKING_SUCCESS,
    payload,
  };
};
