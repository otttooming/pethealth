import * as React from 'react';
import BoneIcon from './components/BoneIcon';
import BellIcon from './components/BellIcon';
import styled from 'styled-components';
import GearIcon from './components/GearIcon';
import PawIcon from './components/PawIcon';

export enum IconSize {
  BIG = 'big',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum IconName {
  BONE = 'bone',
  BELL = 'bell',
  GEAR = 'gear',
  PAW = 'paw',
}

export interface IconProps {
  name: IconName | null;
  size: IconSize;
}

interface WrapperProps {
  size: IconSize;
}

const getWrapperSize = ({ size }: WrapperProps) => {
  if (size === IconSize.BIG) {
    return '213px';
  }

  if (size === IconSize.SMALL) {
    return '24px';
  }

  return '44px';
};

const Wrapper = styled.div<WrapperProps>`
  width: ${props => getWrapperSize(props)};
  height: ${props => getWrapperSize(props)};
`;

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    name: null,
    size: IconSize.MEDIUM,
  };

  renderIcon = () => {
    const { name } = this.props;

    if (name === IconName.BONE) {
      return <BoneIcon />;
    }

    if (name === IconName.BELL) {
      return <BellIcon />;
    }

    if (name === IconName.GEAR) {
      return <GearIcon />;
    }

    if (name === IconName.PAW) {
      return <PawIcon />;
    }

    return null;
  };

  public render() {
    const { name, size } = this.props;

    if (!name) {
      return null;
    }

    return <Wrapper size={size}>{this.renderIcon()}</Wrapper>;
  }
}
