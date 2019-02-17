import React from 'react';
import RX from 'reactxp';
import Avatar from '../../components/Avatar';
import Icon, { IconName } from '../../components/Icon';
import Grid, { Col } from '../../components/Grid';
import FeedSection from './FeedSection';

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    flex: 1,
    backgroundColor: '#ffe7d6',
  }),
  left: RX.Styles.createViewStyle({
    padding: 32,
  }),
  center: RX.Styles.createViewStyle({
    overflow: 'visible',
    maxWidth: '90%' as any,
  }),
  right: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    padding: 32,
  }),
};

class Dashboard extends RX.Component {
  public render() {
    return (
      <RX.View style={style.wrapper}>
        <Grid>
          <Col>
            <RX.Text>Dashboard view</RX.Text>
            <Avatar />
            <Icon name={IconName.PLUS} />
          </Col>

          <Col>
            <FeedSection />
          </Col>
          <Col>Third</Col>
        </Grid>
      </RX.View>
    );
  }
}

export default Dashboard;
