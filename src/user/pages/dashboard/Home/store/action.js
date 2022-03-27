export const GET_DASHBOARD = "GET DASHBOARD [IDEEZA][USER][DASHBOARD][HOME]";
export const GET_DASHBOARD_SUCCESS =
  "GET DASHBOARD SUCCESS [IDEEZA][USER][DASHBOARD][HOME]";
export const TOGGLE_LOADING = "TOGGLE LOADING [IDEEZA][USER][DASHBOARD][HOME]";
export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};
export const onDashboardGet = () => {
  return {
    type: GET_DASHBOARD,
  };
};
export const onDashboardGetSuccess = (payload) => {
  return {
    type: GET_DASHBOARD_SUCCESS,
    payload,
  };
};
