import * as React from 'react';
import RX from 'reactxp';
import PlusIcon from './assets/Plus';

export enum IconSize {
  HUGE = 'huge',
  BIG = 'big',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum IconName {
  BONE = 'bone',
  BELL = 'bell',
  GEAR = 'gear',
  PAW = 'paw',
  SEARCH = 'search',
  SQUAREBLOCKS = 'squareblocks',
  ARROW = 'arrow',
  ARROW_LEFT = 'arrow_left',
  MAIL = 'mail',
  PLUS = 'plus',
}

export interface IconProps {
  name: IconName | null;
  size: IconSize;
  style?: React.CSSProperties;
}

const getWrapperSize = (size: IconSize) => {
  if (size === IconSize.HUGE) {
    return 213;
  }

  if (size === IconSize.BIG) {
    return 130;
  }

  if (size === IconSize.SMALL) {
    return 24;
  }

  return 44;
};

function getStyle(size: IconSize) {
  return RX.Styles.createViewStyle({
    width: getWrapperSize(size),
    height: getWrapperSize(size),
  });
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    name: null,
    size: IconSize.MEDIUM,
  };

  renderIcon = () => {
    const { name } = this.props;

    // if (name === IconName.BONE) {
    //   return <BoneIcon />;
    // }

    // if (name === IconName.BELL) {
    //   return <BellIcon />;
    // }

    // if (name === IconName.GEAR) {
    //   return <GearIcon />;
    // }

    // if (name === IconName.PAW) {
    //   return <PawIcon />;
    // }

    // if (name === IconName.SEARCH) {
    //   return <SearchIcon />;
    // }

    // if (name === IconName.SQUAREBLOCKS) {
    //   return <Squareblocks />;
    // }

    // if (name === IconName.ARROW) {
    //   return <ArrowIcon />;
    // }

    // if (name === IconName.ARROW_LEFT) {
    //   return <ArrowLeftIcon />;
    // }

    // if (name === IconName.MAIL) {
    //   return <MailIcon />;
    // }

    if (name === IconName.PLUS) {
      return <PlusIcon />;
    }

    return null;
  };

  public render() {
    const { name, size } = this.props;

    if (!name) {
      return null;
    }

    return <RX.View style={getStyle(size)}>{this.renderIcon()}</RX.View>;
  }
}
