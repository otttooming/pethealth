import RX, { UserInterface } from 'reactxp';
import * as React from 'react';

export interface ColProps {}
interface State {
  window: RX.Types.Dimensions;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    minHeight: 40,
    padding: 8,
    flexGrow: 1,
    flexBasis: 0,
  }),
};

class Col extends RX.Component<ColProps, State> {
  static defaultProps = {};

  constructor(props: ColProps) {
    super(props);

    this.state = {
      window: UserInterface.measureWindow(),
    };
  }

  componentDidMount() {
    this.setState({
      window: UserInterface.measureWindow(),
    });
  }

  getMinWidth = () => {
    const {
      window: { width },
    } = this.state;

    // Small devices (landscape phones, 576px and up)
    const isSmall = width <= 576;

    // Medium devices (tablets, 768px and up)
    const isMedium = width <= 768;

    if (isSmall || isMedium) {
      return width;
    }

    return undefined;
  };

  getStyle = () => {
    return RX.Styles.createViewStyle({
      overflow: 'visible',
      minHeight: 40,
      padding: 8,
      flexGrow: 1,
      flexBasis: 0,
      minWidth: this.getMinWidth(),
    });
  };

  public render() {
    const { children } = this.props;

    return <RX.View style={this.getStyle()}>{children}</RX.View>;
  }
}

export default Col;
