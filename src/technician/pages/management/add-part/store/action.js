export const GET_PARTS =
  "GET PARTS [IDEEZA][TECHNICIAN][MANAGEMENT][ADD][PART]";
export const GET_PARTS_SUCCESS =
  "GET PARTS SUCCESS [IDEEZA][TECHNICIAN][MANAGEMENT][ADD][PART]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][TECHNICIAN][MANAGEMENT][ADD][PART] ";
//ACTION
export const onPartsGet = (payload) => {
  return {
    type: GET_PARTS,
    payload,
  };
};
export const getPartsSuccess = (payload) => {
  return {
    type: GET_PARTS_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
