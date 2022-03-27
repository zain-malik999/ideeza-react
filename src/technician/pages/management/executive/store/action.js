export const POST_EXECUTIVE = "POST EXECUTIVE [IDEEZA][TECHNICIAN][EXECUTIVE]";
export const POST_EXECUTIVE_SUCCESS =
  "POST EXECUTIVE SUCESSS [IDEEZA][TECHNICIAN][EXECUTIVE]";
export const onPostExecutive = (formData) => {
  return {
    type: POST_EXECUTIVE,
    payload: formData,
  };
};
