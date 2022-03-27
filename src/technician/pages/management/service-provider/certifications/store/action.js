export const GET_CERTIFICATION =
  "GET CERTIFICATION [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][CERTIFICATIONS]";
export const GET_CERTIFICATION_SUCCESS =
  "GET CERTIFICATION_SUCCESS [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][CERTIFICATIONS]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][TECHNICIAN][MANAGEMENT][SERVICE][PROVIDER][CERTIFICATIONS]";
//ACTION
export const onCertificationGet = (payload) => {
  return {
    type: GET_CERTIFICATION,
    payload,
  };
};
export const getCertificationSuccess = (payload) => {
  return {
    type: GET_CERTIFICATION_SUCCESS,
    payload,
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
