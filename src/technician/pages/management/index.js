import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Executive from "./executive";
import Network from "./network";
import AddPart from "./add-part";
import Blogs from "./blogs";
import Career from "./about-us/career";
import Team from "./about-us/team";
import Process from "./service-provider/process";
import Machines from "./service-provider/machines";
import Services from "./service-provider/services";
import Certifications from "./service-provider/certifications";
import Corporations from "./service-provider/corporations";
import AdditionalInfo from "./service-provider/additional-info";
import Task from "./service-provider/task";
import ShippingMethod from "./service-provider/shipping-method";
import AddMachines from "./service-provider/machines/add-machine";
import UserServiceTechnician from "./user-service-technician";
import Categories from "./categories";
import ManagementHome from "../management";
function Management() {
  const route = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${route.url}/`} component={ManagementHome} />
      <Route exact path={`${route.url}/executive`} component={Executive} />
      <Route exact path={`${route.url}/network`} component={Network} />
      <Route exact path={`${route.url}/add-part`} component={AddPart} />
      <Route exact path={`${route.url}/blogs`} component={Blogs} />
      <Route
        exact
        path={`${route.url}/user-service-technician`}
        component={UserServiceTechnician}
      />
      <Route exact path={`${route.url}/about-us/career`} component={Career} />
      <Route exact path={`${route.url}/about-us/team`} component={Team} />
      <Route
        exact
        path={`${route.url}/service-provider/process`}
        component={Process}
      />
      <Route
        exact
        path={`${route.url}/service-provider/machines`}
        component={Machines}
      />
      <Route
        exact
        path={`${route.url}/service-provider/machines/add-machines`}
        component={AddMachines}
      />
      <Route
        exact
        path={`${route.url}/service-provider/services`}
        component={Services}
      />
      <Route
        exact
        path={`${route.url}/service-provider/certifications`}
        component={Certifications}
      />
      <Route
        exact
        path={`${route.url}/service-provider/corporations`}
        component={Corporations}
      />
      <Route
        exact
        path={`${route.url}/service-provider/additional-info`}
        component={AdditionalInfo}
      />
      <Route
        exact
        path={`${route.url}/service-provider/task`}
        component={Task}
      />
      <Route
        exact
        path={`${route.url}/service-provider/shipping-method`}
        component={ShippingMethod}
      />
      <Route exact path={`${route.url}/categories`} component={Categories} />
      <Route
        path="*"
        render={() => <Redirect to={`${route.url}/executive`} />}
      />
    </Switch>
  );
}
export default Management;
