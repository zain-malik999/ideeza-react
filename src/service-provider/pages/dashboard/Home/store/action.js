export const GET_DASHBOARD_DATA =
  "GET DASHBOARD DATA [IDEEZA][SERVICE][PROVIDER][DASHBOARD]";
export const GET_DASHBOARD_DATA_SUCCESS =
  "GET DASHBOARD DATA SUCCESS [IDEEZA][SERVICE][PROVIDER][DASHBOARD]";
export const GET_DASHBOARD_STATS =
  "GET DAASHBOARD STATS [IDEEZA][SERVICE][PROVIDER][DASHBOARD]";
export const GET_DASHBOARD_STATS_SUCCESS =
  "GET DAASHBOARD STATS [IDEEZA][SERVICE][PROVIDER][DASHBOARD]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][SERVICE][PROVIDER][DASHBOARD]";
export const getDashboardData = () => {
  return {
    type: GET_DASHBOARD_DATA,
  };
};
export const getDashboardSuccess = (payload) => {
  return {
    type: GET_DASHBOARD_DATA_SUCCESS,
    payload,
  };
};
export const getDashboardStats = () => {
  return {
    type: GET_DASHBOARD_STATS,
  };
};
export const GetDashboardStatsSuccess = (payload) => {
  return {
    type: GET_DASHBOARD_STATS_SUCCESS,
    payload,
  };
};

export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
