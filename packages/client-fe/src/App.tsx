import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-components';
import Landing from './pages/Landing/Landing';
import Exception from './pages/Exception/Exception';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Categories from './pages/Categories/Categories';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import client from './utils/apollo';
import './App.css';
import Detail from './pages/Detail/Detail';
import Forum from './pages/Forum';
import { GlobalStyle } from '@coterminous/ui';

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }: any) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/login`}>Login</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact={true}
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }: any) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />

        <Router>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              <Route path="/forum" component={Forum} />
              <Route path="/post/:id" component={Detail} />
              <Route path="/post/" component={Detail} />
              <Route path="/login" component={Login} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/detail" component={Detail} />
              <Route exact={true} path="/categories" component={Categories} />
              <Route path="/categories/:id" component={Forum} />
              <Route path="/patients" component={Dashboard} />
              <Route path="/browse" component={Forum} />
              <Route component={Exception} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
