import React, { useEffect, useMemo, useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { UserTemplate } from "template";
import { Actions } from "service";
import { Loader } from "atoms";
import { useDispatch, useSelector } from "react-redux";
import Loadable from "react-loadable";
const General = Loadable({
  loader: () => import("./general"),
  loading: () => <Loader />,
});
const Contributors = Loadable({
  loader: () => import("./contributors"),
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
const Transaction = Loadable({
  loader: () => import("./transaction"),
  loading: () => <Loader />,
});
const Privacy = Loadable({
  loader: () => import("./privacy"),
  loading: () => <Loader />,
});
const Security = Loadable({
  loader: () => import("./security"),
  loading: () => <Loader />,
});
const Notification = Loadable({
  loader: () => import("./notification"),
  loading: () => <Loader />,
});
const PersonalData = Loadable({
  loader: () => import("./personal-data"),
  loading: () => <Loader />,
});
const AccountAction = Loadable({
  loader: () => import("./account-action"),
  loading: () => <Loader />,
});
import TransactionDispute from "./transaction-dispute";
function Settings() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const routes = useMemo(() => [
    {
      name: "General",
      route: ["/user/settings/general"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/general"),
    },
    {
      name: "Notification",
      route: ["/user/settings/notification"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/notification"),
    },
    {
      name: "Contributors",
      route: ["/user/settings/contributors"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/contributors"),
    },
    {
      name: "GetPaid",
      route: ["/user/settings/get-paid"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/get-paid"),
    },
    {
      name: "TaxInformation",
      route: ["/user/settings/tax-information"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/tax-information"),
    },
    {
      name: "Transaction History",
      route: ["/user/settings/transaction"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/transaction"),
    },
    {
      name: "Privacy",
      route: ["/user/settings/privacy"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/privacy"),
    },
    {
      name: "Security",
      route: ["/user/settings/security"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/security"),
    },
    {
      name: "PersonalData",
      route: ["/user/settings/personal-data"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/personal-data"),
    },
    {
      name: "AccountAction",
      route: ["/user/settings/account-action"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/user/settings/account-action"),
    },
  ]);
  const state = useSelector(({ Setting }) => Setting?.menu?.open);
  const userState = useSelector(({ Auth }) => Auth?.user);
  const toggle = () => dispatch(Actions.toggleMenu());
  useEffect(() => {
    setOpen(state);
  }, [state]);
  useEffect(() => {
    if (userState) {
      setUser(userState);
    }
  }, [userState]);
  return (
    <UserTemplate
      user={user}
      toggle={toggle}
      open={open}
      location={location}
      list={routes}
    >
      <Switch>
        <Route exact path={`${route.url}/general`} component={General} />
        <Route
          exact
          path={`${route.url}/account-action`}
          component={AccountAction}
        />
        <Route
          exact
          path={`${route.url}/notification`}
          component={Notification}
        />
        <Route exact path={`${route.url}/privacy`} component={Privacy} />
        <Route
          exact
          path={`${route.url}/personal-data`}
          component={PersonalData}
        />
        <Route exact path={`${route.url}/get-paid`} component={GetPaid} />
        <Route
          exact
          path={`${route.url}/contributors`}
          component={Contributors}
        />
        <Route
          exact
          path={`${route.url}/tax-information`}
          component={TaxInformation}
        />
        <Route exact path={`${route.url}/security`} component={Security} />
        <Route
          exact
          path={`${route.url}/transaction`}
          component={Transaction}
        />
        <Route
          exact
          path={`${route.url}/transaction-dispute`}
          component={TransactionDispute}
        />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/general`} />}
        />
      </Switch>
    </UserTemplate>
  );
}
export default Settings;
