/* eslint-disable no-console */
import "file?name=[name].[ext]!./index.html";

import "babel-polyfill";
import React from "react";
import {render} from "react-dom";

// Route
import Routes from "./components/views/routes";

render(
  <Routes/>,
  document.getElementById("root")
);

console.log("%c🐣 < piyo", "color: #0084FF; font-size: 18px;");
