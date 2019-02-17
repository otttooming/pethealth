import RX from 'reactxp';
import * as React from 'react';
import Avatar from '../Avatar';
import Name from './components/Name';
import Title from './components/Title';
import Icon, { IconName } from '../Icon';
import Description from './components/Description';
import withScreenSize from '../../utils/withScreenSize';
import { ScreenSizeInjectedProps } from '../../utils/withScreenSize/withScreenSize';

export interface CardProps {
  name: string;
  date: string;
  description: string;
}

type Props = CardProps & ScreenSizeInjectedProps;

const style = {
  wrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    shadowOpacity: 0.27,
    shadowRadius: 16,
    shadowColor: 'rgb(254, 79, 21)',
    shadowOffset: { height: 0, width: 4 },
    overflow: 'visible',
  }),
  left: RX.Styles.createViewStyle({
    padding: 32,
  }),
  center: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    flex: 1,
    padding: 24,
    paddingRight: 88,
  }),
  right: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    padding: 32,
  }),
};

class Card extends RX.Component<Props, any> {
  static defaultProps = {
    name: undefined,
    date: undefined,
    description: undefined,
  };

  getWrapperStyle = () => {
    const {
      screen: { isLarge },
    } = this.props;

    return RX.Styles.createViewStyle({
      flexDirection: isLarge ? 'row' : 'column',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderStyle: 'solid',
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 20,
      shadowOpacity: 0.27,
      shadowRadius: 16,
      shadowColor: 'rgb(254, 79, 21)',
      shadowOffset: { height: 0, width: 0 },
      overflow: 'visible',
    });
  };

  getCenterStyle = () => {
    const {
      screen: { isLarge, isSmall },
    } = this.props;

    const padding = isSmall ? 16 : 24;

    return RX.Styles.createViewStyle({
      alignSelf: 'stretch',
      flex: 1,
      paddingTop: padding,
      paddingBottom: padding,
      paddingLeft: padding,
      paddingRight: isLarge ? 88 : padding,
    });
  };

  getRightStyle = () => {
    const {
      screen: { isLarge, isSmall },
    } = this.props;

    const padding = isSmall ? 16 : 24;

    return RX.Styles.createViewStyle({
      flexDirection: isLarge ? 'column' : 'row',
      justifyContent: isLarge ? 'flex-start' : 'center',
      alignSelf: 'stretch',
      padding,
    });
  };

  public render() {
    const { name, date, description } = this.props;

    return (
      <RX.View style={this.getWrapperStyle()}>
        <RX.View style={style.left}>
          <Avatar />
          <Name name={name} />
        </RX.View>
        <RX.View style={this.getCenterStyle()}>
          <Title title={name} date={date} />
          <Description description={description} />
        </RX.View>
        <RX.View style={this.getRightStyle()}>
          <Icon name={IconName.PLUS} />
          <Icon name={IconName.PLUS} />
          <Icon name={IconName.PLUS} />
        </RX.View>
      </RX.View>
    );
  }
}

export default withScreenSize()<CardProps>(Card);
