import RX from 'reactxp';
import * as React from 'react';
import Image from './Image';

export enum AvatarSize {
  INTERMEDIATE = 'intermediate',
  MEDIUM = 'medium',
  NORMAL = 'normal',
  SMALL = 'small',
}

export interface AvatarProps {
  size: AvatarSize;
  source: string;
}

const getFigureSize = (size: AvatarSize): number => {
  if (size === AvatarSize.SMALL) {
    return 27;
  }

  if (size === AvatarSize.NORMAL) {
    return 48;
  }

  if (size === AvatarSize.INTERMEDIATE) {
    return 67;
  }

  return 91;
};

function getStyle(size: AvatarSize) {
  return RX.Styles.createViewStyle({
    position: 'relative',
    marginBottom: 0,
    width: getFigureSize(size),
    height: getFigureSize(size),
    borderRadius: getFigureSize(size),
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { height: 0, width: 0 },
  });
}

class Avatar extends RX.Component<AvatarProps, any> {
  static defaultProps = {
    size: AvatarSize.MEDIUM,
    source:
      'https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg',
  };

  public render() {
    const { size, source } = this.props;

    return (
      <RX.View style={getStyle(size)}>
        <Image source={source} />
      </RX.View>
    );
  }
}

export default Avatar;
