import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomeBlog from "./home";
import BlogPreview from "./blog-preview";
import AddArticle from "./add-article";
import { withReducer } from "service";
import Reducer from "./store/reducer";
import { onCategoriesGet } from "./store/action";
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
export default withReducer("categories", Reducer)(Blog);
