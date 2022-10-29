import "./assets/css/nucleo-icons.css";
import "./assets/scss/adg-scss-importer.scss";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Provider, useDispatch
} from 'react-redux';

import Index from "views/IndexSections/Index";
import store from "custom-redux/store";
import { setStaffName } from "custom-redux/configSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let staff = localStorage.getItem("staff");
    dispatch(setStaffName(staff));
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Index {...props} />} />
      </Switch>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <Provider store={store}  >
    <App />
  </Provider>,
  document.getElementById("root")
);
