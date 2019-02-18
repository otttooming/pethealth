import React from 'react';
import RX from 'reactxp';
import Grid, { Col } from '../../components/Grid';
import FeedSection from './FeedSection';
import Sidebar from '../../components/Sidebar';
import withScreenSize from '../../utils/withScreenSize';
import { ScreenSizeInjectedProps } from '../../utils/withScreenSize/withScreenSize';
import RightSection from './RightSection';

type Props = ScreenSizeInjectedProps;

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

class Dashboard extends RX.Component<Props> {
  public render() {
    const {
      screen: { isLarge, isMedium },
    } = this.props;

    return (
      <RX.ScrollView style={style.wrapper}>
        <Grid>
          {isLarge && (
            <Col style={{ maxWidth: 256 }}>
              <Sidebar />
            </Col>
          )}

          <Col>
            <FeedSection />
          </Col>

          {(isLarge || isMedium) && (
            <Col style={{ maxWidth: isMedium ? 160 : 256 }}>
              <RightSection />
            </Col>
          )}
        </Grid>
      </RX.ScrollView>
    );
  }
}

export default withScreenSize()<Props>(Dashboard);
