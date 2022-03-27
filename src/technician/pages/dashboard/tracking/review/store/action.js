export const GET_PROJECT_REVIEW =
  "GET PROJECT TRACKING REVIEW [IDEEZA][TECHNICIAN][DASHBOARD][TRACKING][REVIEW]";
export const GET_PROJECT_REVIEW_SUCCESS =
  "GET PROJECT TRACKING REVIEW SUCCESS [IDEEZA][TECHNICIAN][DASHBOARD][TRACKING][REVIEW]";
export const TOGGLE_LOADER =
  "TOGGLE_LOADER [IDEEZA][TECHNICIAN][DASHBOARD][TRACKING][REVIEW]";
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const onProjectTrackingReview = (payload) => {
  return {
    type: GET_PROJECT_REVIEW,
    payload,
  };
};
export const onProjectTrackingReviewSuccess = (payload) => {
  return {
    type: GET_PROJECT_REVIEW_SUCCESS,
    payload,
  };
};
