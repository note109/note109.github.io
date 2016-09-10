import React, {Component} from "react";
import {Router, Route, Redirect} from "react-router";
import {browserHistory} from "react-router";

// style
import {Style, StyleElement} from "./style.js";

Style.registerRule("body", {
  margin: 0,
  padding: 0,
});

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
