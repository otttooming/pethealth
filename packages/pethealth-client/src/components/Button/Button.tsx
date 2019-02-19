import * as React from 'react';
import RX from 'reactxp';

export enum ButtonType {
  WHITE = 'white',
  RED = 'red',
}
export interface ButtonProps {
  type: ButtonType;
}

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
  static defaultProps = {
    type: ButtonType.RED,
  };

  public render() {
    const { children } = this.props;

    return (
      <RX.Button style={this.getWrapperStyle()}>
        <RX.Text selectable={true} style={this.getButtonStyle()}>
          {children}
        </RX.Text>
      </RX.Button>
    );
  }

  private getWrapperStyle = () => {
    const { type } = this.props;

    const backgroundColor = type === ButtonType.WHITE ? '#fff' : '#ff6d6d';

    return RX.Styles.createButtonStyle({
      overflow: 'visible',
      backgroundColor,
      borderRadius: 90,
    });
  };

  private getButtonStyle = () => {
    const { type } = this.props;

    const color = type === ButtonType.WHITE ? '#333' : '#fff';

    return RX.Styles.createTextStyle({
      textDecorationLine: 'none',
      fontStyle: 'normal',
      lineHeight: 22,
      fontSize: 17,
      textAlign: 'center',
      color,
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 40,
      paddingLeft: 40,
      borderWidth: 0,
    });
  };
}

export default Button;
