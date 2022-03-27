import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Actions } from "service";
import Dashboard from "./pages/dashboards";
import Settings from "./pages/settings";
// import Project from "./pages/project";
// import Tracking from "./pages/tracking";
import Management from "./pages/management";
// import Electronics from "./pages/electronics";

function Root() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.onTokenVerify());
  }, []);
  return (
    <Router basename="technician">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        {/* <Route path="/project" component={Project} /> */}
        {/* <Route path="/tracking" component={Tracking} /> */}
        <Route path="/management" component={Management} />
        {/* <Route path="/electronics" component={Electronics} /> */}
        <Route path="*" render={() => <Redirect to="/dashboard" />} />
      </Switch>
    </Router>
  );
}
export default Root;
