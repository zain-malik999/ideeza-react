import React, { useState, useEffect } from "react";
import { Dashboard } from "orgasms";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { withReducer } from "service";
import { onDashboardGet } from "./store/action";
import {
  handleProjectModel,
  createNewProject,
  handleMySelfProject,
} from "../../../store/action";
import Reducer from "./store/reducer";
function Home() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [dashboard, setDashboard] = useState(null);
  const [project, setProject] = useState(false);
  const [mySelf, setMySelf] = useState(false);
  const [mySelfLoading, setMySelfLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const projectModel = useSelector(({ User }) => User?.project?.model);
  const mySelfModel = useSelector(({ User }) => User?.project?.self?.model);
  const mySelfLoader = useSelector(({ User }) => User?.project?.self?.loading);
  const state = useSelector((state) => state?.Auth?.authenticated);
  const User = useSelector((state) => state?.Auth?.user);
  const dashData = useSelector(({ UserDashboard }) => UserDashboard);
  const getDashboardData = () => dispatch(onDashboardGet());
  const push = (e) => history.push("/user/dashboard/new-project");
  const toggleProjectModel = (e) => {
    e.preventDefault();
    return dispatch(handleProjectModel());
  };
  const handler = (e) => {
    return dispatch(createNewProject(e));
  };
  const toggleMySelftProject = () => dispatch(handleMySelfProject());
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getDashboardData();
  }, [auth]);
  useEffect(() => {
    if (dashData) {
      setDashboard(dashData);
    }
  }, [dashData]);
  useEffect(() => {
    setLoading(dashData.loading);
  }, [dashData.loading]);
  useEffect(() => {
    setProject(projectModel);
  }, [projectModel]);

  useEffect(() => {
    setMySelfLoader(mySelfLoader);
  }, [mySelfLoader]);
  useEffect(() => {
    setMySelf(mySelfModel);
  }, [mySelfModel]);
  useEffect(() => {
    if (User) {
      setUser(User);
    }
  }, [User]);
  return (
    <>
      <Dashboard
        loading={loading}
        push={push}
        open={project}
        mySelf={mySelf}
        handler={handler}
        loader={mySelfLoading}
        toggleOpen={toggleProjectModel}
        toggleMySelftProject={toggleMySelftProject}
        state={dashboard}
        user={user}
      />
    </>
  );
}
export default withReducer("UserDashboard", Reducer)(Home);
