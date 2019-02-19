import * as React from 'react';
import RX from 'reactxp';
import Icon, { IconName } from '../../Icon/Icon';

export interface HeaderProps {}

const style = {
  wrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  }),
  left: RX.Styles.createViewStyle({
    marginRight: 16,
  }),
  right: RX.Styles.createViewStyle({
    justifyContent: 'center',
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
    fontSize: 16,
    color: '#ff6d6d',
    marginBottom: 4,
  }),
  time: RX.Styles.createTextStyle({
    fontWeight: '500',
    fontSize: 10,
    color: '#b3b3b3',
    marginBottom: 0,
  }),
};

class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
      <RX.View style={style.wrapper}>
        <RX.View style={style.left}>
          <Icon name={IconName.PLUS} />
        </RX.View>
        <RX.View style={style.right}>
          <RX.Text style={style.title}>Bone fracture</RX.Text>
          <RX.Text style={style.time}>24.02.2013</RX.Text>
        </RX.View>
      </RX.View>
    );
  }
}

export default Header;
