import { GET_USER_PROJECTS_SUCCES } from "./action";
const initState = {
  userProject: null,
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_PROJECTS_SUCCES: {
      return {
        userProject: action?.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
