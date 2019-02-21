import * as React from 'react';
import RX from 'reactxp';
import { RouteComponentProps } from 'react-router';
import Grid, { Col } from '../../components/Grid';
import Sidebar from '../../components/Sidebar/Sidebar';
import withScreenSize from '../../utils/withScreenSize';
import { ScreenSizeInjectedProps } from '../../utils/withScreenSize/withScreenSize';
import Patient from '../../components/Patient';
import Timeline from '../../components/Timeline';

type Props = ScreenSizeInjectedProps & RouteComponentProps;

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

class Detail extends React.Component<Props, any> {
  public render() {
    const {
      screen: { isLarge },
    } = this.props;

    return (
      <RX.ScrollView style={style.wrapper}>
        <Grid>
          {isLarge && (
            <Col style={{ maxWidth: 80 }}>
              <Sidebar isCollapsed={true} />
            </Col>
          )}

          {isLarge && (
            <Col>
              <Patient />
            </Col>
          )}

          <Col>
            <Timeline />
          </Col>

          {isLarge && <Col>{/* <MessageSection /> */}</Col>}
        </Grid>
      </RX.ScrollView>
    );
  }
}

export default withScreenSize()<Props>(Detail);
