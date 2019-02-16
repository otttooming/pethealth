import React from 'react';
import RX from 'reactxp';
import Avatar from '../../components/Avatar';
import Icon, { IconName } from '../../components/Icon';

class Dashboard extends RX.Component {
  public render() {
    return (
      <RX.View>
        <RX.Text>Dashboard view</RX.Text>
        <Avatar />
        <Icon name={IconName.PLUS} />
      </RX.View>
    );
  }
}

export default Dashboard;
