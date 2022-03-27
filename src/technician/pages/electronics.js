import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ElectronicsComponent from "./electronics";

function Electronics() {
  return (
    <Switch>
      <Route path={`/electronics`} component={ElectronicsComponent} />
      <Route path="*" render={() => <Redirect to={`/electronics`} />} />
    </Switch>
  );
}
export default Electronics;
