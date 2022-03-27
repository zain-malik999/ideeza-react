import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TrackingComponent from "./tracking";
function Tracking() {
  return (
    <Switch>
      <Route path={`/tracking`} component={TrackingComponent} />
      <Route path="*" render={() => <Redirect to={`/tracking`} />} />
    </Switch>
  );
}
export default Tracking;
