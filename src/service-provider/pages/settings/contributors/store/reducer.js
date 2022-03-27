import { GET_ADMIN_SUCCESS } from "../store/action";
const initState = {
  admindata: [],
  loader: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ADMIN_SUCCESS: {
      return {
        ...state,
        admindata: action?.payload,
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
