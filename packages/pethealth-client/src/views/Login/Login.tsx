import React from 'react';
import RX from 'reactxp';
import { Link } from '../../utils/routing/routing';

class Login extends RX.Component {
  public render() {
    return (
      <RX.View>
        <RX.Text>Login view</RX.Text>
        <Link to="/dashboard">
          <RX.Text>Link to dashboard</RX.Text>
        </Link>
      </RX.View>
    );
  }
}

export default Login;
