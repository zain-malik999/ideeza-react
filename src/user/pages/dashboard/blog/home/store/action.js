export const GET_BLOG = "GET BLOG [IDEEZA][USER][BLOG][HOME]";
export const GET_BLOG_SUCCESS = "GET BLOG SUCCESS [IDEEZA][USER][BLOG][HOME]";
export const DELETE_BLOG = "DELETE BLOG [IDEEZA][USER][BLOG][HOME]";
export const onBlogGet = (payload = {}) => {
  return {
    type: GET_BLOG,
    payload,
  };
};
export const getBlogSuccess = (payload, params = {}) => {
  return {
    type: GET_BLOG_SUCCESS,
    payload,
    params,
  };
};
export const deleteBlog = (payload) => {
  return {
    type: DELETE_BLOG,
    payload,
  };
};
