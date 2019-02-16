import React from 'react';
import RX from 'reactxp';
import Avatar from '../../components/Avatar';

class Dashboard extends RX.Component {
  public render() {
    return (
      <RX.View>
        <RX.Text>Dashboard view</RX.Text>
        <Avatar />
      </RX.View>
    );
  }
}

export default Dashboard;
