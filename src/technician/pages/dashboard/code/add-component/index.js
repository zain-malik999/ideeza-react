import React from "react";
import { CodeStepper } from "orgasms";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import SearchPart from "./search-part";
import AddSuccessfully from "./add-successfully";
function AddComponent() {
  const route = useRouteMatch();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Switch>
        <Route path={`${route.url}/search`} component={SearchPart} />
        <Route path={`${route.url}/successfully`} component={AddSuccessfully} />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/search`} />}
        />
      </Switch>
    </div>
  );
}
export default AddComponent;
