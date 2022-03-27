import { GET_CATEGORIES_SUCCESS } from "./action";
const initState = {
  categories: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action?.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
