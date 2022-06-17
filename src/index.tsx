/****************************************************
 * Audit Big Data System Query Engine
 * 模型显示框架（含凭证等相关显示）
 * 2020-09
 * Sunny <tufpsj@yonyou.com>
 ****************************************************/

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Switch } from "react-router-dom";
import { routers } from "./router";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch children={routers} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
