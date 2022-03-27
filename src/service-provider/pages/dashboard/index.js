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
const Home = Loadable({
  loader: () => import("./Home"),
  loading: () => <Loader />,
});
const Transaction = Loadable({
  loader: () => import("./transaction"),
  loading: () => <Loader />,
});
const TransactionDispute = Loadable({
  loader: () => import("./transaction/dispute"),
  loading: () => <Loader />,
});
const Orders = Loadable({
  loader: () => import("./orders"),
  loading: () => <Loader />,
});
const MyNote = Loadable({
  loader: () => import("./my-note"),
  loading: () => <Loader />,
});
const Blog = Loadable({
  loader: () => import("./blog"),
  loading: () => <Loader />,
});
const MyProfile = Loadable({
  loader: () => import("./my-profile"),
  loading: () => <Loader />,
});
const Message = Loadable({
  loader: () => import("./message"),
  loading: () => <Loader />,
});
function Dashboard() {
  const [open, setOpen] = useState(true);
  const [serviceProvider, setServiceProvider] = useState(null);
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const routes = useMemo(() => [
    {
      name: "Dashboard",
      route: ["/dashboard/home"],
      icon: "/assets/template/user/siderbar-icons/dashboard.png",
      img: true,
      click: () => history.push("/dashboard/home"),
    },
    {
      name: "Orders",
      route: ["/dashboard/orders"],
      icon: "/assets/template/siderbar-icons/transactions.png",
      img: true,
      click: () => history.push("/dashboard/orders"),
    },
    {
      name: "Transaction",
      route: ["/dashboard/transactions"],
      icon: "/assets/template/siderbar-icons/transactions.png",
      img: true,
      click: () =>
        history.push(
          "/dashboard/transactions",
          "/dashboard/transactions/dispute"
        ),
    },
    {
      name: "Message",
      route: ["/dashboard/message"],
      icon: "/assets/template/siderbar-icons/transactions.png",
      img: true,
      click: () => history.push("/dashboard/message"),
    },
    {
      name: "Projects",
      route: ["/dashboard/project", "/dashboard/project/product-detail/"],
      icon: "/assets/template/user/siderbar-icons/my-project.png",
      img: true,
      click: () => history.push("/project", "/project/product-detail"),
    },
    {
      name: "Blog",
      route: ["/dashboard/blog", "/dashboard/blog/add-article"],
      icon: "/assets/template/user/siderbar-icons/blog.png",
      img: true,
      click: () => history.push("/dashboard/blog"),
    },
    {
      name: "My Notes",
      route: ["/dashboard/my-note"],
      icon: "/assets/template/user/siderbar-icons/my-notes.png",
      img: true,
      click: () => history.push("/dashboard/my-note"),
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
    <>
      <ServiceProviderTemplate
        serviceProvider={serviceProvider}
        toggle={toggle}
        open={open}
        location={location}
        list={routes}
      >
        <Switch>
          <Route exact path={`${route.url}/home`} component={Home} />
          <Route
            exact
            path={`${route.url}/transactions`}
            component={Transaction}
          />
          <Route
            exact
            path={`${route.url}/transactions/dispute`}
            component={TransactionDispute}
          />
          <Route exact path={`${route.url}/orders`} component={Orders} />
          <Route exact path={`${route.url}/my-note`} component={MyNote} />
          <Route path={`${route.url}/blog`} component={Blog} />
          <Route path={`${route.url}/my-profile`} component={MyProfile} />
          <Route exact path={`${route.url}/message`} component={Message} />
          <Route
            path="*"
            render={() => <Redirect to={`${route.url}/home`} />}
          />
        </Switch>
      </ServiceProviderTemplate>
    </>
  );
}
export default Dashboard;
