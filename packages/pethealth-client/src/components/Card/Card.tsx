import RX from 'reactxp';
import * as React from 'react';
import Avatar from '../Avatar';
import Name from './components/Name';

export interface CardProps {
  name: string;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
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
};

class Card extends RX.Component<CardProps, any> {
  static defaultProps = {
    name: null,
  };

  public render() {
    const { name } = this.props;

    return (
      <RX.View style={style.wrapper}>
        <RX.View style={style.left}>
          <Avatar />
          <Name name={name} />
        </RX.View>
      </RX.View>
    );
  }
}

export default Card;
