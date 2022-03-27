export const PUT_SECURITY = "PUT SECURITY [IDEEZA][USER][SETTINGS][SECURITY]";
export const PUT_SECURITY_SUCCESS =
  "PUT SECURITY SUCCESS [IDEEZA][USER][SETTINGS][SECURITY]";
export const onSecurityPut = (payload) => {
  return {
    type: PUT_SECURITY,
    payload,
  };
};
export const onSecurityPutSuccess = (payload) => {
  return {
    type: PUT_SECURITY_SUCCESS,
    payload,
  };
};
