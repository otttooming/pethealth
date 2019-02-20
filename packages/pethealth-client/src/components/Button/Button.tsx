import * as React from 'react';
import RX from 'reactxp';
import { Link } from '../../utils/routing/routing';

export enum ButtonType {
  WHITE = 'white',
  RED = 'red',
}
export interface ButtonProps {
  type: ButtonType;
  to?: string;
  onPress: () => void;
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
    onPress: () => {},
  };

  public render() {
    const { to, onPress } = this.props;

    const getIsString: (value: string | undefined) => boolean = (
      value: string | undefined,
    ) => typeof value === 'string';

    const getIsLink = (value: string | undefined): value is string =>
      getIsString(value);

    if (getIsLink(to)) {
      return (
        <Link to={to} style={this.getWrapperStyle() as React.CSSProperties}>
          {this.renderTextContent()}
        </Link>
      );
    }

    return (
      <RX.Button style={this.getWrapperStyle()} onPress={onPress}>
        {this.renderTextContent()}
      </RX.Button>
    );
  }

  private renderTextContent = () => {
    const { children } = this.props;

    return (
      <RX.Text selectable={true} style={this.getButtonStyle()}>
        {children}
      </RX.Text>
    );
  };

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
