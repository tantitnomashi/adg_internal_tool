import "./assets/css/nucleo-icons.css";
import "./assets/scss/adg-scss-importer.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "views/IndexSections/Index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
