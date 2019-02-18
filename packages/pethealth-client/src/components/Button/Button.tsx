import * as React from 'react';
import RX from 'reactxp';

export interface ButtonProps {}

const style = {
  wrapper: RX.Styles.createButtonStyle({
    overflow: 'visible',
    backgroundColor: '#ff6d6d',
    borderRadius: 90,
  }),
  text: RX.Styles.createTextStyle({
    fontStyle: 'normal',
    lineHeight: 22,
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 40,
    paddingLeft: 40,
    borderWidth: 0,
  }),
};

class Button extends RX.Component<ButtonProps, any> {
  public render() {
    const { children } = this.props;

    return (
      <RX.Button style={style.wrapper}>
        <RX.Text style={style.text}>{children}</RX.Text>
      </RX.Button>
    );
  }
}

export default Button;
