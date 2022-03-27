export const GET_CORPORATIONS =
  " GET CORPORATIONS [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][CORPORATIONS]";
export const GET_CORPORATIONS_SUCCESS =
  " GET CORPORATIONS SUCCESS [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][CORPORATIONS]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][CORPORATIONS] ";
//ACTION
export const onCorporationGet = (payload) => {
  return {
    type: GET_CORPORATIONS,
    payload,
  };
};
export const getCorporationSuccesss = (payload) => {
  return {
    type: GET_CORPORATIONS_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
