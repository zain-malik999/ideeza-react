import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withReducer } from "service";
import { onCategoriesGet } from "./store/action";
import { Loader } from "atoms";
import Loaderable from "react-loadable";
import Reducer from "./store/reducer";
const HomeBlog = Loaderable({
  loader: () => import("./home"),
  loading: () => <Loader />,
});
const BlogPreview = Loaderable({
  loader: () => import("./blog-preview"),
  loading: () => <Loader />,
});
const AddArticle = Loaderable({
  loader: () => import("./add-article"),
  loading: () => <Loader />,
});
function Blog() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  useEffect(() => {
    dispatch(onCategoriesGet());
  }, []);
  return (
    <Switch>
      <Route exact path={`${match?.path}/`} component={HomeBlog} />
      <Route exact path={`${match?.path}/preview`} component={BlogPreview} />
      <Route exact path={`${match?.path}/add-article`} component={AddArticle} />
    </Switch>
  );
}
export default withReducer("Blog", Reducer)(Blog);
