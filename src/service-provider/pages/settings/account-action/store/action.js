export const DELETE_ACCOUNT =
  "DELETE ACCOUNT [IDEEZA][SERVICE-PROVIDER][SETTINGS][ACCOUNT-ACTION]";
export const TOGGLE_LOADER =
  "TOGGLE LOADER [IDEEZA][SERVICE-PROVIDER][ACCOUNT-ACTION]";
export const toggleLoad = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const deleteAccount = (payload) => {
  return {
    type: DELETE_ACCOUNT,
    payload,
  };
};
