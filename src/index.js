import "./assets/css/nucleo-icons.css";
import "./assets/scss/adg-scss-importer.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Provider
} from 'react-redux';

import Index from "views/IndexSections/Index";
import store from "custom-redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}  >
      <Switch>
        <Route path="/" render={(props) => <Index {...props} />} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
