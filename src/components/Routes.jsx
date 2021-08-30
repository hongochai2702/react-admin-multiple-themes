import React from "react";

import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";

const Routes = () => {
  return (
    <Switch>
      <Route component={Dashboard} exact path="/" />
      <Route component={Customers} path="/customers" />
    </Switch>
  );
};

export default Routes;
