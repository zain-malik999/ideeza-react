import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { Loader } from "atoms";
import Loadable from "react-loadable";
const ProjectDetail = Loadable({
  loader: () => import("./project-detail"),
  loading: () => <Loader />,
});
const ProductDetail = Loadable({
  loader: () => import("./product-detail"),
  loading: () => <Loader />,
});
const ProjectHome = Loadable({
  loader: () => import("./home"),
  loading: () => <Loader />,
});
const ProjectDetailedInfoHourly = Loadable({
  loader: () => import("./project-detailed-info-hourly"),
  loading: () => <Loader />,
});
const ProjectDetailedMilestones = Loadable({
  loader: () => import("./project-detailed-info-milestones"),
  loading: () => <Loader />,
});
const ProjectCoverage = Loadable({
  loader: () => import("./project-coverage"),
  loading: () => <Loader />,
});
const Questionnaire = Loadable({
  loader: () => import("./questionnaire"),
  loading: () => <Loader />,
});
function Project() {
  const route = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${route.url}/`} component={ProjectHome} />
      <Route
        exact
        path={`${route.url}/project-detail/:projectid`}
        component={ProjectDetail}
      />
      <Route
        exact
        path={`${route.url}/product-detail/:productid`}
        component={ProductDetail}
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
        path={`${route.url}/project-coverage`}
        component={ProjectCoverage}
      />
      <Route
        exact
        path={`${route.url}/questionnaire`}
        component={Questionnaire}
      />
      <Route path="*" render={() => <Redirect to={`${route.url}`} />} />
    </Switch>
  );
}
export default Project;
