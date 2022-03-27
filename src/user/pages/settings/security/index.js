import React from "react";
import { ChangePassword, Verification, LoginHistory } from "orgasms";
import { withReducer } from "service";
import Reducer from "./store/reducer";
import { onSecurityPut } from "./store/action";
import { useDispatch } from "react-redux";
function Security() {
  const dispatch = useDispatch();
  const changePassword = (payload) => dispatch(onSecurityPut(payload));

  return (
    <div className="md:w-3/4 space-y-10">
      <ChangePassword change={changePassword} />
      <Verification />
      <LoginHistory />
    </div>
  );
}

export default withReducer("UserSecurity", Reducer)(Security);
