import * as React from 'react';
import RX from 'reactxp';
import Avatar, { AvatarSize } from '../../Avatar/Avatar';

interface FooterProps {}

const style = {
  wrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
  }),
  left: RX.Styles.createViewStyle({
    overflow: 'visible',
    marginRight: 16,
  }),
  name: RX.Styles.createTextStyle({
    fontWeight: '500',
    fontSize: 12,
    color: '#ff6d6d',
    marginBottom: 0,
  }),
};

const Footer: React.FC<FooterProps> = () => (
  <RX.View style={style.wrapper}>
    <RX.View style={style.left}>
      <Avatar size={AvatarSize.SMALL} />
    </RX.View>
    <RX.Text style={style.name}>Dr. Mari Mumm</RX.Text>
  </RX.View>
);

export default Footer;
