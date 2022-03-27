import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { TechnicianTemplate } from "template";
import Production from "./production";
import Review from "./review";
function Tracking() {
  const route = useRouteMatch();
  return (
    <TechnicianTemplate>
      <Switch>
        <Route exact path={`${route.url}/production`} component={Production} />
        <Route exact path={`${route.url}/review`} component={Review} />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/production`} />}
        />
      </Switch>
    </TechnicianTemplate>
  );
}
export default Tracking;
