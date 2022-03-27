export const POST_BLOG = "POST BLOG [IDEEZA][USER][ADD][BLOG]";
export const POST_BLOG_SUCCESS = "POST BLOG SUCCESS [IDEEZA][USER][ADD][BLOG]";

export const onPostBlog = (formData) => {
  return {
    type: POST_BLOG,
    payload: formData,
  };
};
