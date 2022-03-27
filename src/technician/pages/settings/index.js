import React, { useEffect, useMemo, useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { TechnicianTemplate } from "template";
import { Actions } from "service";
import { Loader } from "atoms";
import { useDispatch, useSelector } from "react-redux";
import Loadable from "react-loadable";
const General = Loadable({
  loader: () => import("./general"),
  loading: () => <Loader />,
});
const Notification = Loadable({
  loader: () => import("./notification"),
  loading: () => <Loader />,
});
const Privacy = Loadable({
  loader: () => import("./privacy"),
  loading: () => <Loader />,
});
const GetPaid = Loadable({
  loader: () => import("./get-paid"),
  loading: () => <Loader />,
});
const TaxInformation = Loadable({
  loader: () => import("./tax-information"),
  loading: () => <Loader />,
});
const Security = Loadable({
  loader: () => import("./security"),
  loading: () => <Loader />,
});
function Settings() {
  const [open, setOpen] = useState(true);
  const [serviceProvider, setServiceProvider] = useState(null);
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const routes = useMemo(() => [
    {
      name: "General",
      route: ["/settings/general"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/general"),
    },
    {
      name: "Notification",
      route: ["/settings/notification"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/notification"),
    },
    {
      name: "Privacy",
      route: ["/settings/privacy"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/privacy"),
    },
    {
      name: "Security",
      route: ["/settings/security"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/security"),
    },
    {
      name: "GetPaid",
      route: ["/settings/get-paid"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/get-paid"),
    },
    {
      name: "Tax Information",
      route: ["/settings/tax-information"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/tax-information"),
    },
  ]);
  const state = useSelector(({ Setting }) => Setting?.menu?.open);
  const serviceProviderState = useSelector(({ Auth }) => Auth?.serviceProvider);
  const toggle = () => dispatch(Actions.toggleMenu());
  useEffect(() => {
    setOpen(state);
  }, [state]);
  useEffect(() => {
    if (serviceProviderState) {
      setServiceProvider(serviceProviderState);
    }
  }, [serviceProviderState]);
  return (
    <TechnicianTemplate
      serviceProvider={serviceProvider}
      toggle={toggle}
      open={open}
      location={location}
      list={routes}
    >
      <Switch>
        <Route exact path={`${route.url}/general`} component={General} />
        <Route
          exact
          path={`${route.url}/notification`}
          component={Notification}
        />
        <Route exact path={`${route.url}/privacy`} component={Privacy} />
        <Route exact path={`${route.url}/get-paid`} component={GetPaid} />
        <Route
          exact
          path={`${route.url}/tax-information`}
          component={TaxInformation}
        />
        <Route exact path={`${route.url}/security`} component={Security} />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/general`} />}
        />
      </Switch>
    </TechnicianTemplate>
  );
}
export default Settings;
