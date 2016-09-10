import React, {Component} from "react";
import {Router, Route, Redirect} from "react-router";
import {browserHistory} from "react-router";

// style
import {StyleElement} from "app/utils/style.js";
import "./style.js";


// pages
import Index from "./Index/index.js";

const routes = (
  <div>
    <Route>
      <Route path="/" component={Index}/>
      <Redirect from="*" to="index"/>
    </Route>
    <StyleElement />
  </div>
);

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    );
  }
}
