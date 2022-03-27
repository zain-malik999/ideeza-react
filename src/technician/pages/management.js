import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ManagementComponent from "./management/index";
function Management() {
  return (
    <Switch>
      <Route path={`/management`} component={ManagementComponent} />
      <Route path="*" render={() => <Redirect to={`/management`} />} />
    </Switch>
  );
}
export default Management;
