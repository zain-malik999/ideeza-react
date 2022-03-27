import React from "react";
import { Steppers } from "molecules";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import New from "./save-project";
import Search from "./search";
function NewProject(props) {
  const route = useRouteMatch();
  return (
    <>
      <Steppers
        currentStep={0}
        className="w-1/2 mx-auto"
        options={["Search", "More Info"]}
        Icons={{
          1: 1,
          2: 2,
        }}
      />
      <Switch>
        <Route exact path={`${route.url}/search`} component={Search} />
        <Route exact path={`${route.url}/save`} component={New} />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/search`} />}
        />
      </Switch>
    </>
  );
}

export default NewProject;
