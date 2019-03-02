import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Button from 'antd/lib/button';
import styled from 'styled-components';
import Landing from './pages/Landing/Landing';
import Exception from './pages/Exception/Exception';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import client from './utils/apollo';

import logo from './doggo1.png';
import './App.css';
import Detail from './pages/Detail/Detail';

const RedComponent = styled.div`
  background: blue;
  color: red;
`;

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Button type="primary">Button</Button>
      <RedComponent>ABC</RedComponent>
    </div>
  );
}

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
        <Router>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/detail" component={Detail} />
              <Route component={Exception} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
