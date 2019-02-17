import * as React from 'react';
import RX, { UserInterface } from 'reactxp';

export interface ScreenSize {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
}

export interface ScreenSizeInjectedProps {
  screen: ScreenSize;
}

interface ScreenSizeComponentState {
  screen: ScreenSize;
}

function withScreenSize(): <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P> {
  return <P extends object>(WrappedComponent: React.ComponentType<P>) =>
    class ScreenSizeComponent extends RX.Component<
      P,
      ScreenSizeComponentState
    > {
      state = {
        screen: {
          isSmall: false,
          isMedium: false,
          isLarge: false,
        },
      };

      constructor(props: P) {
        super(props);

        this.state = {
          screen: this.getSize(),
        };
      }

      getSize = () => {
        const { width } = UserInterface.measureWindow();
        // Small devices (landscape phones, 576px and up)
        const isSmall = width <= 576;

        // Medium devices (tablets, 768px and up)
        const isMedium = width <= 768;

        const isLarge = width > 768;

        const screen = {
          isSmall,
          isMedium,
          isLarge,
        };

        return screen;
      };

      public render() {
        const { screen } = this.state;
        return <WrappedComponent {...this.props} screen={screen} />;
      }
    };
}

export default withScreenSize;
