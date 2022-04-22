import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ListItems from './views/index';
import Items from './views/items';
import './css/font.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/" exact component={ListItems} />
      <Route path="/items" exact component={Items} />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

