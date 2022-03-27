import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProjectComponent from "./project/index";
function Dashboard() {
  return (
    <Switch>
      <Route path={`/project`} component={ProjectComponent} />
      <Route path="*" render={() => <Redirect to={`/project`} />} />
    </Switch>
  );
}
export default Dashboard;
