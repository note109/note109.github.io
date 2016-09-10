import React, {Component} from "react";
import {Router, Route, Redirect} from "react-router";
import {browserHistory} from "react-router";

// pages
import Index from "./Index/index.js";

const routes = (
  <Route>
    <Route path="/" component={Index}/>
    <Redirect from="*" to="index"/>
  </Route>
);

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    );
  }
}
