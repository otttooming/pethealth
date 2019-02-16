import React from 'react';
import RX from 'reactxp';
import Routing, { Router } from './utils/routing/routing';
import Landing from './views/Landing/Landing';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
const { Route, Switch } = Routing;

export class App extends RX.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
