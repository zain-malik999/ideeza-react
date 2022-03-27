export const GET_BlOGS_MANAGEMENT =
  "GET BLOGS MANAGEMENT [IDEEZA][TECHNICIAN][MANAGAEMENT][BLOGS]";
export const GET_BlOGS_MANAGEMENT_SUCCESS =
  "GET BLOGS MANAGEMENT SUCCESS [IDEEZA][TECHNICIAN][MANAGAEMENT][BLOGS]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][TECHNICIAN][MANAGAEMENT][BLOGS]";
//ACTION
export const onBlogsManagamentGet = (payload) => {
  return {
    type: GET_BlOGS_MANAGEMENT,
    payload,
  };
};
export const getBlogsManagementSuccess = (payload) => {
  return {
    type: GET_BlOGS_MANAGEMENT_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
