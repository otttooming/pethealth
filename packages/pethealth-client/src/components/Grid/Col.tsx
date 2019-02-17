import RX from 'reactxp';
import * as React from 'react';

export interface ColProps {}

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    minHeight: 40,
    padding: 8,
    flexGrow: 1,
    flexBasis: 0,
  }),
};

class Col extends RX.Component<ColProps, any> {
  static defaultProps = {};

  public render() {
    const { children } = this.props;

    return <RX.View style={style.wrapper}>{children}</RX.View>;
  }
}

export default Col;
