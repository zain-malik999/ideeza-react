import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SettingsComponent from "./setting";
function Settings() {
  return (
    <Switch>
      <Route path={`/settings`} component={SettingsComponent} />
      <Route path="*" render={() => <Redirect to={`/setting`} />} />
    </Switch>
  );
}
export default Settings;
