import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CartRoutes from "./cart/index";
function CartRoute() {
  return (
    <Switch>
      <Route path={`/cart`} component={CartRoutes} />
      <Route path="*" render={() => <Redirect to={`/cart`} />} />
    </Switch>
  );
}
export default CartRoute;
