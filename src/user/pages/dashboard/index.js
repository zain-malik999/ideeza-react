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
const Home = Loadable({
  loader: () => import("./Home"),
  loading: () => <Loader />,
});
const NewsFeed = Loadable({
  loader: () => import("./news-feed"),
  loading: () => <Loader />,
});
const Blog = Loadable({
  loader: () => import("./blog"),
  loading: () => <Loader />,
});
const MyNote = Loadable({
  loader: () => import("./my-note"),
  loading: () => <Loader />,
});
const ProjectComponent = Loadable({
  loader: () => import("./project"),
  loading: () => <Loader />,
});
const Building = Loadable({
  loader: () => import("./building"),
  loading: () => <Loader />,
});
const Help = Loadable({
  loader: () => import("./help"),
  loading: () => <Loader />,
});
const SeeAllProject = Loadable({
  loader: () => import("./See-All-Projects"),
  loading: () => <Loader />,
});
const NewProjectSection = Loadable({
  loader: () => import("./new-project"),
  loading: () => <Loader />,
});
const Support = Loadable({
  loader: () => import("./support"),
  loading: () => <Loader />,
});
const Message = Loadable({
  loader: () => import("./message"),
  loading: () => <Loader />,
});
const SearchResult = Loadable({
  loader: () => import("./search-result"),
  loading: () => <Loader />,
});
function Dashboard() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const routes = useMemo(
    () => [
      {
        name: "Dashboard",
        route: ["/user/dashboard/home", "/user/dashboard/see-all-projects"],
        icon: "/assets/template/user/siderbar-icons/dashboard.png",
        img: true,
        click: () => history.push("/user/dashboard/home"),
      },
      {
        name: "My Project",
        route: [
          "/user/dashboard/project",
          "/dashboard/project/product-detail/",
        ],
        icon: "/assets/template/user/siderbar-icons/my-project.png",
        img: true,
        click: () =>
          history.push(
            "/user/dashboard/project",
            "/user/dashboard/project/product-detail"
          ),
      },
      {
        name: "News Feed",
        route: ["/user/dashboard/news-feed"],
        icon: "/assets/template/user/siderbar-icons/new-feed.png",
        img: true,
        click: () => history.push("/user/dashboard/news-feed"),
      },
      {
        name: "My Notes",
        route: ["/user/dashboard/my-note"],
        icon: "/assets/template/user/siderbar-icons/my-notes.png",
        img: true,
        click: () => history.push("/user/dashboard/my-note"),
      },
      {
        name: "Blog",
        route: ["/user/dashboard/blog", "/user/dashboard/blog/add-article"],
        icon: "/assets/template/user/siderbar-icons/blog.png",
        img: true,
        click: () => history.push("/user/dashboard/blog"),
      },
    ],
    []
  );
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
        <Route exact path={`${route.url}/home`} component={Home} />
        <Route
          exact
          path={`${route.url}/see-all-projects`}
          component={SeeAllProject}
        />
        <Route exact path={`${route.url}/my-note`} component={MyNote} />
        <Route exact path={`${route.url}/news-feed`} component={NewsFeed} />
        <Route path={`${route.url}/blog`} component={Blog} />

        <Route
          path={`${route.url}/new-project`}
          component={NewProjectSection}
        />
        <Route exact path={`${route.url}/message`} component={Message} />
        <Route exact path={`${route.url}/help`} component={Help} />
        <Route exact path={`${route.url}/support`} component={Support} />
        <Route exact path={`${route.url}/building`} component={Building} />
        <Route path={`${route.url}/project`} component={ProjectComponent} />
        <Route
          exact
          path={`${route.url}/search-result`}
          component={SearchResult}
        />
        <Route path="*" render={() => <Redirect to={`${route.url}/home`} />} />
      </Switch>
    </UserTemplate>
  );
}
export default Dashboard;
