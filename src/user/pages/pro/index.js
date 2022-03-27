import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { UserProTemplate } from "template";
import { TreeView } from "molecules";
import { withReducer, Actions } from "service";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCoverComponent,
  getElectronicComponent,
  getProjectDetail,
} from "./store/action";
import { Loader } from "atoms";
import Loadable from "react-loadable";
import Reducer from "./store/reducer";
const Electronic = Loadable({
  loader: () => import("./electronic"),
  loading: () => <Loader />,
});
const Cover = Loadable({
  loader: () => import("./cover"),
  loading: () => <Loader />,
});
const General = Loadable({
  loader: () => import("./general"),
  loading: () => <Loader />,
});
function Pro() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [param, setParam] = useState(null);
  const [name, setName] = useState("");
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(({ Setting }) => Setting?.menu?.open);
  const userState = useSelector(({ Auth }) => Auth?.user);
  const toggle = () => dispatch(Actions.toggleMenu());
  const project = useSelector(({ Pro }) => Pro?.project);
  useEffect(() => {
    setName(project?.title);
  }, [project]);
  useEffect(() => {
    setOpen(state);
  }, [state]);
  useEffect(() => {
    if (userState) {
      setUser(userState);
    }
  }, [userState]);
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  useEffect(() => {
    const { pathname } = location;
    if (pathname) {
      let path = pathname.split("/");
      console.log("APty", path);
      if (path.length >= 3) {
        let id = path[path.length - 1];
        id = parseInt(id);
        setParam(id);
      }
    }
  }, [location?.pathname]);
  useEffect(() => {
    dispatch(getProjectDetail(param));
  }, [param]);
  return (
    <UserProTemplate
      user={user}
      toggle={toggle}
      open={open}
      Sidebar={Sidebar}
      history={history}
      route={location}
      name={name}
    >
      <Switch>
        <Route path={`${route?.url}/electronic`} component={Electronic} />
        <Route path={`${route?.url}/cover`} component={Cover} />
        <Route path={`${route?.url}/general`} component={General} />
        <Route
          path="*"
          render={() => <Redirect to={`${route?.url}/electronic`} />}
        />
      </Switch>
    </UserProTemplate>
  );
}
function Sidebar() {
  const [item, setItem] = useState([]);
  const location = useLocation();
  const pro = useSelector(({ Pro }) => Pro?.sidebar);
  const dispatch = useDispatch();
  const sidebarAction = (type, payload) => {
    if (location.pathname?.includes("electronic")) {
      return dispatch(getElectronicComponent(payload));
    } else {
      return dispatch(getCoverComponent(payload));
    }
  };
  useEffect(() => {
    setItem(pro);
  }, [pro]);
  return <TreeView click={sidebarAction} Items={item} />;
}

export default withReducer("Pro", Reducer)(Pro);
