import React from "react";
import { Router, Route, Switch } from "wouter";

import { NotFound } from "./Components/NotFound";
import { Home } from "./Screens/Home";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
};
