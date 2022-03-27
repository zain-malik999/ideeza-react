export const GET_CATEGORIES = "GET CATEGORIES [IDEEZA][USER][CATEGORIES][BLOG]";
export const GET_CATEGORIES_SUCCESS =
  "GET CATEGORIES SUCCESS [IDEEZA][USER][CATEGORIES][BLOG]";
export const TOGGLE_LOADER = "TOGGLE LOADER [IDEEZA][USER][BLOG]";
export const RESET_PAGE = "RESET PAGE [IDEEZA][USER][BLOG][HOME]";
export const toggleLoad = () => {
  return {
    type: TOGGLE_LOADER,
  };
};
export const onCategoriesGet = () => {
  return {
    type: GET_CATEGORIES,
  };
};
export const getCategoriesSuccess = (payload) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload,
  };
};
export const resetPage = () => {
  return {
    type: RESET_PAGE,
  };
};
