import React, { useEffect, useMemo, useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { ServiceProviderTemplate } from "template";
import { Actions } from "service";
import { Loader } from "atoms";
import { useDispatch, useSelector } from "react-redux";
import Loadable from "react-loadable";
const General = Loadable({
  loader: () => import("./general"),
  loading: () => <Loader />,
});
const BusinessInfo = Loadable({
  loader: () => import("./business-info"),
  loading: () => <Loader />,
});
const CostOfService = Loadable({
  loader: () => import("./cost-of-service"),
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
const PricingPlan = Loadable({
  loader: () => import("./pricing-plan"),
  loading: () => <Loader />,
});
const AccountAction = Loadable({
  loader: () => import("./account-action"),
  loading: () => <Loader />,
});

import Transaction from "./transaction";
import TransactionDispute from "./transaction-dispute";
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
      name: "BusinessInfo",
      route: ["/settings/business-info"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/business-info"),
    },
    {
      name: "CostOfService",
      route: ["/settings/cost-of-service"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/cost-of-service"),
    },
    {
      name: "Agents",
      route: ["/settings/contributors"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/contributors"),
    },
    {
      name: "GetPaid",
      route: ["/settings/get-paid"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/get-paid"),
    },
    {
      name: "TaxInformation",
      route: ["/settings/tax-information"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/tax-information"),
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
      name: "Notification",
      route: ["/settings/notification"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/notification"),
    },
    {
      name: "PersonalData",
      route: ["/settings/personal-data"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/personal-data"),
    },
    {
      name: "PricingPlan",
      route: ["/settings/pricing-plan"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/pricing-plan"),
    },
    {
      name: "AccountAction",
      route: ["/settings/account-action"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/settings/account-action"),
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
    <ServiceProviderTemplate
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
          exact
          path={`${route.url}/business-info`}
          component={BusinessInfo}
        />
        <Route
          exact
          path={`${route.url}/cost-of-service`}
          component={CostOfService}
        />
        <Route
          exact
          path={`${route.url}/pricing-plan`}
          component={PricingPlan}
        />
        <Route
          path="*"
          render={() => <Redirect to={`${route.url}/general`} />}
        />
      </Switch>
    </ServiceProviderTemplate>
  );
}
export default Settings;
