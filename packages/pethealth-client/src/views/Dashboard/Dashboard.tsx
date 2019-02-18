import React from 'react';
import RX from 'reactxp';
import Grid, { Col } from '../../components/Grid';
import FeedSection from './FeedSection';
import Sidebar from '../../components/Sidebar';

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
      <RX.ScrollView style={style.wrapper}>
        <Grid>
          <Col style={{ maxWidth: 320 }}>
            <Sidebar />
          </Col>

          <Col>
            <FeedSection />
          </Col>

          <Col>
            <RX.Text>Third</RX.Text>
          </Col>
        </Grid>
      </RX.ScrollView>
    );
  }
}

export default Dashboard;
