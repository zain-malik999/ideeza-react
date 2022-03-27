import React from "react";
import { CodeStepper } from "orgasms";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import AddPart from "./add-part";
import AddComponent from "./add-component";
function Code() {
  const route = useRouteMatch();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <CodeStepper /> */}
      <Switch>
        <Route path={`${route.url}/add-part`} component={AddPart} />
        <Route path={`${route.url}/add-component`} component={AddComponent} />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/search`} />}
        />
      </Switch>
    </div>
  );
}
export default Code;
