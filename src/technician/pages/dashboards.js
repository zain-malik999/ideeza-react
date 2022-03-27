import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashboardComponent from "./dashboard/index";
function Dashboard() {
  return (
    <Switch>
      <Route path={`/dashboard`} component={DashboardComponent} />
      <Route path="*" render={() => <Redirect to={`/dashboard`} />} />
    </Switch>
  );
}
export default Dashboard;
