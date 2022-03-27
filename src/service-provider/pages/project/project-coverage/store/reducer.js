import { GET_PROJECT_DETAIL_SUCCESS } from "./action";
const initState = {
  project: null,
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROJECT_DETAIL_SUCCESS: {
      return {
        ...state,
        project: action?.payload,
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
