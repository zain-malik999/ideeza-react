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
const Home = Loadable({
  loader: () => import("./home"),
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
const Message = Loadable({
  loader: () => import("./message"),
  loading: () => <Loader />,
});
const ProjectComponent = Loadable({
  loader: () => import("./project"),
  loading: () => <Loader />,
});
const Production = Loadable({
  loader: () => import("./tracking/production"),
  loading: () => <Loader />,
});
const Review = Loadable({
  loader: () => import("./tracking/review"),
  loading: () => <Loader />,
});
const ManagementComponent = Loadable({
  loader: () => import("../management"),
  loading: () => <Loader />,
});
const AddPartComponent = Loadable({
  loader: () => import("./electronics/add-part"),
  loading: () => <Loader />,
});
const ConfigureComponent = Loadable({
  loader: () => import("./electronics/add-part/configure"),
  loading: () => <Loader />,
});
const ElectronicsComponent = Loadable({
  loader: () => import("./electronics/add-part/electronics"),
  loading: () => <Loader />,
});
const GeneralComponent = Loadable({
  loader: () => import("./electronics/add-part/general"),
  loading: () => <Loader />,
});
const Schematic = Loadable({
  loader: () => import("./electronics/add-component/schematic"),
  loading: () => <Loader />,
});
const DesignComponent = Loadable({
  loader: () => import("./electronics/add-component/design"),
  loading: () => <Loader />,
});
const CodeComponent = Loadable({
  loader: () => import("./electronics/add-component/code"),
  loading: () => <Loader />,
});
const AddGeneralComponent = Loadable({
  loader: () => import("./electronics/add-component/general"),
  loading: () => <Loader />,
});
const Code = Loadable({
  loader: () => import("./code"),
  loading: () => <Loader />,
});
function Dashboard() {
  const [open, setOpen] = useState(true);
  const [technician, setTechnician] = useState(null);
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
      name: "Electronics",
      route: ["/dashboard/electronics"],
      icon: "/assets/template/siderbar-icons/transactions.png",
      img: true,
      click: () => history.push("/dashboard/electronics/add-part"),
    },
    {
      name: "Add Component",
      route: ["/dashboard/electronics/add-component"],
      icon: "/assets/template/siderbar-icons/transactions.png",
      img: true,
      click: () => history.push("/dashboard/electronics/add-component"),
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
      click: () =>
        history.push("/dashboard/project", "/dashboard/project/product-detail"),
    },
    {
      name: "Management",
      route: ["/dashboard/management/executive"],
      icon: "/assets/template/user/siderbar-icons/my-project.png",
      img: true,
      click: () => history.push("/dashboard/management/executive"),
    },
    {
      name: "Production",
      route: ["/dashboard/tracking/production"],
      icon: "/assets/template/user/siderbar-icons/my-notes.png",
      img: true,
      click: () => history.push("/dashboard/tracking/production"),
    },
    {
      name: "Review",
      route: ["/dashboard/tracking/review"],
      icon: "/assets/template/user/siderbar-icons/my-notes.png",
      img: true,
      click: () => history.push("/dashboard/tracking/review"),
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
  const technicianState = useSelector(({ Auth }) => Auth?.technician);
  const toggle = () => dispatch(Actions.toggleMenu());
  useEffect(() => {
    setOpen(state);
  }, [state]);
  useEffect(() => {
    if (technicianState) {
      setTechnician(technicianState);
    }
  }, [technicianState]);
  return (
    <>
      <TechnicianTemplate
        technician={technician}
        toggle={toggle}
        open={open}
        location={location}
        list={routes}
      >
        <Switch>
          <Route exact path={`${route.url}/home`} component={Home} />
          <Route exact path={`${route.url}/my-note`} component={MyNote} />
          <Route
            exact
            path={`${route.url}/tracking/production`}
            component={Production}
          />
          <Route
            exact
            path={`${route.url}/tracking/review`}
            component={Review}
          />
          <Route path={`${route.url}/blog`} component={Blog} />
          <Route
            exact
            path={`${route.url}/electronics/add-part`}
            component={AddPartComponent}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-part/configure`}
            component={ConfigureComponent}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-part/electronics`}
            component={ElectronicsComponent}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-part/general`}
            component={GeneralComponent}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-component`}
            component={Schematic}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-component/design`}
            component={DesignComponent}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-component/code`}
            component={CodeComponent}
          />
          <Route
            exact
            path={`${route.url}/electronics/add-component/general`}
            component={AddGeneralComponent}
          />
          <Route path={`${route.url}/project`} component={ProjectComponent} />
          <Route
            path={`${route.url}/management`}
            component={ManagementComponent}
          />
          <Route exact path={`${route.url}/message`} component={Message} />
          <Route path={`${route.url}/code`} component={Code} />
          <Route
            path="*"
            render={() => <Redirect to={`${route.url}/home`} />}
          />
        </Switch>
      </TechnicianTemplate>
    </>
  );
}
export default Dashboard;
