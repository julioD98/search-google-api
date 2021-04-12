import React from "react";
import { Router, Route, Switch } from "wouter";

import { NotFound } from "./Components/NotFound";
import { Home } from "./Screens/Home";
import { Results } from "./Screens/Results";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/results/:q">
          {(params) => <Results data={params.q} />}
        </Route>
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
};
