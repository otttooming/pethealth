import React from 'react';
import RX from 'reactxp';
import Avatar from '../../components/Avatar';
import Icon, { IconName } from '../../components/Icon';
import Card from '../../components/Card';
import Grid, { Col } from '../../components/Grid';

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    flex: 1,
    backgroundColor: '#ffc093',
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
            <Card
              name="Roboto"
              date="2019/02/16"
              description="Cats can get infected by tapeworms, hookworms and whipworms. They get tapeworms by ingesting fleas infected with tapeworm eggs or by eating infected rodents. “The entire worm matures in the large intestine of the cat,” Lund said. “[Then] pieces of th..."
            />
          </Col>
          <Col>Third</Col>
        </Grid>
      </RX.View>
    );
  }
}

export default Dashboard;
