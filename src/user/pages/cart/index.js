import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Reducer from "./Store/reducer";
import { withReducer } from "service";
import { UserTemplate } from "template";
import Overview from "./overview";
import Cart from "./cart";
import AddService from "./add-services";
import Payment from "./payment";
import Confirmation from "./confirmation";
import Delivery from "./delivery";
import Hire from "./hire";
import Manufacture from "./manufacture";
import { useDispatch, useSelector } from "react-redux";
import { onGetCart } from "./Store/action";
function CartRoutes() {
  const dispatch = useDispatch();
  const userid = useSelector(({ Auth }) => Auth?.user?.id);
  useEffect(() => {
    dispatch(onGetCart(userid));
  }, [userid]);
  const route = useRouteMatch();
  return (
    <UserTemplate>
      <Switch>
        <Route exact path={`${route.url}/overview`} component={Overview} />
        <Route exact path={`${route.url}/cart`} component={Cart} />
        <Route
          exact
          path={`${route.url}/add-services`}
          component={AddService}
        />
        <Route exact path={`${route.url}/payment`} component={Payment} />
        <Route exact path={`${route.url}/delivery`} component={Delivery} />
        <Route
          exact
          path={`${route.url}/confirmation`}
          component={Confirmation}
        />
        <Route exact path={`${route.url}/confirmation/hire`} component={Hire} />
        <Route
          exact
          path={`${route.url}/manufacture`}
          component={Manufacture}
        />
        <Route path="*" render={() => <Redirect to={`${route.url}/cart`} />} />
      </Switch>
    </UserTemplate>
  );
}
export default withReducer("cart", Reducer)(CartRoutes);
