import RX from 'reactxp';
import * as React from 'react';

export interface GridProps {}

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
  }),
};

class Grid extends RX.Component<GridProps, any> {
  static defaultProps = {};

  public render() {
    const { children } = this.props;

    return <RX.View style={style.wrapper}>{children}</RX.View>;
  }
}

export default Grid;
