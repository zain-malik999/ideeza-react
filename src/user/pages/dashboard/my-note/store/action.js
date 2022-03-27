export const GET_NOTES = "GET NOTE [IDEEZA][USER][DASHBOARD][NOTES]";
export const GET_NOTES_SUCCESS =
  "GET NOTE SUCCESS [IDEEZA][USER][DASHBOARD][NOTES]";
export const GET_PROJECT = "GET PROJECT [IDEEZA][USER][DASHBOARD][NOTES]";
export const GET_PROJECT_SUCCESS =
  "GET PROJECT SUCCESS [IDEEZA][USER][DASHBOARD][NOTES]";
export const SAVE_NOTES = "SAVE NOTES [IDEEZA][USER][DASHBOARD][NOTES]";
export const GET_USER = "GET USER [IDEEZA][USER][DASHBOARD][NOTES]";
export const GET_USER_SUCCESS =
  "GET USER SUCCESS [IDEEZA][USER][DASHBOARD][NOTES]";
export const getUsers = () => {
  return {
    type: GET_USER,
  };
};
export const getUsersSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};
export const getProject = () => {
  return {
    type: GET_PROJECT,
  };
};
export const getProjectSuccess = (payload) => {
  return {
    type: GET_PROJECT_SUCCESS,
    payload,
  };
};
export const onGetNotes = (payload) => {
  return {
    type: GET_NOTES,
    payload,
  };
};
export const onGetNotesSuccess = (payload) => {
  return {
    type: GET_NOTES_SUCCESS,
    payload,
  };
};
export const onSaveNotes = (payload) => {
  return {
    type: SAVE_NOTES,
    payload,
  };
};
