import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Settings from "./pages/settings";
import CartRoute from "./pages/cart/index";
import Pro from "./pages/pro";
import Reducer from "./store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { withReducer } from "service";
import { DashboardPopup, MyIdeeza } from "orgasms";
import { Loader } from "atoms";
import Loadable from "react-loadable";
import {
  handleProjectModel,
  createNewProject,
  handleMySelfProject,
} from "./store/action";
const Dashboard = Loadable({
  loader: () => import("./pages/dashboard/index"),
  loading: () => <Loader />,
});
function Root() {
  const dispatch = useDispatch();
  const history = useHistory();
  const route = useRouteMatch();
  const [project, setProject] = useState(false);
  const [mySelf, setMySelf] = useState(false);
  const [mySelfLoading, setMySelfLoader] = useState(false);
  const projectModel = useSelector(({ User }) => User?.project?.model);
  const mySelfModel = useSelector(({ User }) => User?.project?.self?.model);
  const mySelfLoader = useSelector(({ User }) => User?.project?.self?.loading);
  const toggleProjectModel = (e) => {
    e.preventDefault();
    return dispatch(handleProjectModel());
  };
  const handler = (e) => {
    return dispatch(createNewProject(e));
  };
  const toggleMySelftProject = () => dispatch(handleMySelfProject());
  useEffect(() => {
    setProject(projectModel);
  }, [projectModel]);

  useEffect(() => {
    setMySelfLoader(mySelfLoader);
  }, [mySelfLoader]);
  useEffect(() => {
    setMySelf(mySelfModel);
  }, [mySelfModel]);
  const push = (e) => history.push("/user/dashboard/new-project");

  return (
    <>
      {project ? (
        <DashboardPopup
          history={push}
          open={project}
          mySelf={mySelf}
          handler={handler}
          loader={mySelfLoading}
          toggleOpen={toggleProjectModel}
          toggleMySelftProject={toggleMySelftProject}
        />
      ) : null}
      <Switch>
        <Route
          render={() => (
            <>
              <Dashboard />
              <MyIdeeza project={toggleProjectModel} />
            </>
          )}
          path={`${route?.url}/dashboard`}
        />
        <Route component={Settings} path={`${route?.url}/settings`} />
        <Route component={CartRoute} path={`${route?.url}/cart`} />
        <Route component={Pro} path={`${route?.url}/pro`} />
        <Route path="*" render={() => <Redirect to="/dashboard" />} />
      </Switch>
    </>
  );
}
export default withReducer("User", Reducer)(React.memo(Root));
