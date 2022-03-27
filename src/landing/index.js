import React from "react";
import Home from "./Home";
import Collaboration from "./Collaboration";
import SuccessStory from "./SuccessStory";
import Freelancer from "./Freelancer";
import Blog from "./Blog";
import Article from "./Article";
import About from "./About";
import ServiceProviders from "./ServiceProvider";
import Invester from "./Invester";
import Support from "./Support";
import Help from "user/pages/dashboard/help/";
import Pricing from "./Pricing";
import Agreement from "./Agreement";
import { withLanding } from "template/Landing";
import { Switch, Route } from "react-router-dom";

function Landing() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={withLanding.bind(this, Home)} />
        <Route
          exact
          path="/collaboration"
          component={withLanding.bind(this, Collaboration)}
        />
        <Route
          exact
          path="/success-story"
          component={withLanding.bind(this, SuccessStory)}
        />
        <Route
          exact
          path="/freelancer"
          component={withLanding.bind(this, Freelancer)}
        />
        <Route exact path="/blog" component={withLanding.bind(this, Blog)} />
        <Route
          exact
          path="/blog/article"
          component={withLanding.bind(this, Article)}
        />
        <Route exact path="/about" component={withLanding.bind(this, About)} />
        <Route
          exact
          path="/service-providers"
          component={withLanding.bind(this, ServiceProviders)}
        />

        <Route
          exact
          path="/investor"
          component={withLanding.bind(this, Invester)}
        />
        <Route path="/contact" component={withLanding.bind(this, Support)} />
        <Route path="/help" component={withLanding.bind(this, Help)} />
        <Route
          exact
          path="/pricing"
          component={withLanding.bind(this, Pricing)}
        />
        <Route
          exact
          path="/agreement"
          component={withLanding.bind(this, Agreement)}
        />
      </Switch>
    </>
  );
}
export default Landing;
