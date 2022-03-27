import React, { useState, useEffect } from "react";
import { ChangePassword, Verification, LoginHistory } from "orgasms";
import { withReducer } from "service";
import Reducer from "./store/reducer";
import { onSecurityPut, getLoginHistory } from "./store/action";
import { useDispatch, useSelector } from "react-redux";
function Security() {
  const dispatch = useDispatch();
  const changePassword = (payload) => dispatch(onSecurityPut(payload));
  const [loginHistory, setLoginHistory] = useState([]);
  const [loader, setLoader] = useState(false);
  const getHistory = useSelector(
    ({ UserSecurity }) => UserSecurity?.loginHistory
  );
  const loading = useSelector(({ UserSecurity }) => UserSecurity?.loading);
  const Auth = useSelector((UserSecurity) => UserSecurity?.Auth);
  useEffect(() => {
    if (getHistory) {
      console.log("getHistory");

      setLoginHistory(getHistory);
    }
  }, [getHistory]);

  useEffect(() => {
    dispatch(getLoginHistory());
  }, []);
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  {
    return (
      <div className="md:w-3/4 space-y-10">
        <ChangePassword change={changePassword} />
        <Verification />
        <LoginHistory data={loginHistory} />
      </div>
    );
  }
}

export default withReducer("UserSecurity", Reducer)(Security);
