import { PUT_SECURITY_SUCCESS } from "./action";
const initState = {
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_SECURITY_SUCCESS: {
      return {
        ...state,
        oldpassword: action?.payload?.old_password,
        newpassword: action?.payload?.new_password,
        confirmpassword: action?.payload?.confirm_password,
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
