import {
  PUT_SECURITY_SUCCESS,
  GET_LOGIN_HISTORY_SUCCESS,
  TOGGLE_LOADER,
} from "./action";
const initState = {
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
  loginHistory: [],
  count: 0,
  data: [],
  loader: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_SECURITY_SUCCESS: {
      return {
        ...state,
        oldpassword: action?.payload?.old_password,
        newpassword: action?.payload?.new_password,
        confirmpassword: action?.payload?.confirm_password,
        // data: action?.payload,
      };
    }
    case GET_LOGIN_HISTORY_SUCCESS: {
      return {
        ...state,
        loginHistory: action?.payload,
      };
    }
    case TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
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
