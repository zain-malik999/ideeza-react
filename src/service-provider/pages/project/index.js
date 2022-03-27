import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { UserTemplate } from "template";
import ProjectHome from "./home";
import ProjectDetail from "./project-detail/index";
import ProjectDetailedInfoHourly from "./project-detailed-info-hourly";
import ProjectDetailedMilestones from "./project-detailed-info-milestones";
import ProjectCoverage from "./project-coverage";
import Questionnaire from "./questionnaire";

function Project() {
  const route = useRouteMatch();
  return (
    <UserTemplate>
      <Switch>
        <Route exact path={`${route.url}/`} component={ProjectHome} />
        <Route
          exact
          path={`${route.url}/project-coverage/:projectid`}
          component={ProjectCoverage}
        />
        <Route
          exact
          path={`${route.url}/project-detail`}
          component={ProjectDetail}
        />
        <Route
          exact
          path={`${route.url}/project-detailed-info-hourly`}
          component={ProjectDetailedInfoHourly}
        />
        <Route
          exact
          path={`${route.url}/project-detailed-info-milestones`}
          component={ProjectDetailedMilestones}
        />
        <Route
          exact
          path={`${route.url}/questionnaire`}
          component={Questionnaire}
        />
        <Route path="*" render={() => <Redirect to={`${route.url}`} />} />
      </Switch>
    </UserTemplate>
  );
}
export default Project;
