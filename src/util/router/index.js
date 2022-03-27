import React, { useEffect } from "react";
import User from "user/app";
import ServiceProvider from "service-provider/app";
import { Actions } from "service";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Technician from "technician/app";
import Landing from "landing/index";
function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.onTokenVerify());
  }, []);
  return (
    <BrowserRouter>
      <Route path="/user" component={User} />
      <Route path="/technician" component={Technician} />
      <Route path="/service-provider" component={ServiceProvider} />
      <Landing />
    </BrowserRouter>
  );
}
export default Router;
