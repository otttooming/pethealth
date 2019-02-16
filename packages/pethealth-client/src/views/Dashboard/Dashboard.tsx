import React from 'react';
import RX from 'reactxp';
import Avatar from '../../components/Avatar';
import Icon, { IconName } from '../../components/Icon';
import Card from '../../components/Card';

class Dashboard extends RX.Component {
  public render() {
    return (
      <RX.View>
        <RX.Text>Dashboard view</RX.Text>
        <Avatar />
        <Icon name={IconName.PLUS} />

        <Card name="Roboto" />
      </RX.View>
    );
  }
}

export default Dashboard;
