import React, { Component } from 'react';
import Button from 'antd/lib/button';
import styled from 'styled-components';
import Landing from './pages/Landing/Landing';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

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
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <Route exact={true} path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
