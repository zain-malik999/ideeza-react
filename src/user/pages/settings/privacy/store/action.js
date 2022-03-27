export const PUT_PRIVACY = "PUT PRIVACY [IDEEZA][USER][SETTINGS][PRIVACY]";
export const PUT_PRIVACY_SUCCESS =
  "PUT PRIVACY SUCCESS [IDEEZA][USER][SETTINGS][PRIVACY]";

export const onPrivacyPut = () => {
  return {
    type: PUT_PRIVACY,
  };
};

export const onPrivacyPutSuccess = (payload) => {
  return {
    type: PUT_PRIVACY_SUCCESS,
    payload,
  };
};
