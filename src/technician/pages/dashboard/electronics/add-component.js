import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { UserTemplate } from "template";
import SchematicComponent from "./add-component/schematic/";
import DesignComponent from "./add-component/design/";
import CodeComponent from "./add-component/code";
import AddGeneralComponent from "./add-component/general";

function AddComponent() {
  const route = useRouteMatch();
  return (
    <UserTemplate>
      <Switch>
        <Route
          exact
          path={`${route.url}/add-component`}
          component={SchematicComponent}
        />
        <Route exact path={`${route.url}/design`} component={DesignComponent} />
        <Route exact path={`${route.url}/code`} component={CodeComponent} />
        <Route
          exact
          path={`${route.url}/general`}
          component={AddGeneralComponent}
        />
        <Route path="*" render={() => <Redirect to={`/add-component`} />} />
      </Switch>
    </UserTemplate>
  );
}
export default AddComponent;
