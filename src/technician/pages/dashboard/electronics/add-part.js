import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { UserTemplate } from "template";
import AddPartComponent from "./add-part/";
import ConfigureComponent from "./add-part/configure/";
import ElectronicsComponent from "./add-part/electronics/";
import GeneralComponent from "./add-part/general/";

function AddPart() {
  const route = useRouteMatch();
  return (
    <UserTemplate>
      <Switch>
        <Route
          exact
          path={`${route.url}/add-part`}
          component={AddPartComponent}
        />
        <Route
          exact
          path={`${route.url}/configure`}
          component={ConfigureComponent}
        />
        <Route
          exact
          path={`${route.url}/electronics`}
          component={ElectronicsComponent}
        />
        <Route
          exact
          path={`${route.url}/general`}
          component={GeneralComponent}
        />
        <Route path="*" render={() => <Redirect to={`/add-part`} />} />
      </Switch>
    </UserTemplate>
  );
}
export default AddPart;
