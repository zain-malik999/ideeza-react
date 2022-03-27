export const GET_CATEGORIES = "GET CATEGORIES [IDEEZA][USER][CATEGORIES][BLOG]";
export const GET_CATEGORIES_SUCCESS =
  "GET CATEGORIES SUCCESS [IDEEZA][USER][CATEGORIES][BLOG]";
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
