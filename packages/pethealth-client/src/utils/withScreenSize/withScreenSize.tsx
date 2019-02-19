import * as React from 'react';
import RX, { UserInterface } from 'reactxp';

export interface ScreenSize {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
}

export interface ScreenDimensions {
  width: number;
  height: number;
}

export interface ScreenSizeInjectedProps {
  screen: ScreenSize;
  dimensions: ScreenDimensions;
}

interface ScreenSizeComponentState {
  screen: ScreenSize;
  dimensions: ScreenDimensions;
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
        dimensions: {
          width: 0,
          height: 0,
        },
      };

      constructor(props: P) {
        super(props);

        this.state = {
          screen: this.getSize(),
          dimensions: this.getDimensions(),
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

      getDimensions = () => {
        const { width, height } = UserInterface.measureWindow();

        return { width, height };
      };

      public render() {
        const { screen, dimensions } = this.state;
        return (
          <WrappedComponent
            {...this.props}
            screen={screen}
            dimensions={dimensions}
          />
        );
      }
    };
}

export default withScreenSize;
