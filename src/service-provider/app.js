import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Settings from "./pages/settings";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";

function Root() {
  return (
    <Router basename="service-provider">
      <Switch>
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Settings} path="/settings" />
        <Route component={Project} path="/project" />
      </Switch>
    </Router>
  );
}
export default Root;
