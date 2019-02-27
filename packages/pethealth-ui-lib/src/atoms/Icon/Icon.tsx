import * as React from 'react';
import Bone from './icons/Bone';
import Bell from './icons/Bell';
import styled from 'styled-components';
import Gear from './icons/Gear';
import Paw from './icons/Paw';
import Search from './icons/Search';
import Squareblocks from './icons/Squareblocks';
import Arrow from './icons/Arrow';
import ArrowLeft from './icons/ArrowLeft';
import Mail from './icons/Mail';
import Plus from './icons/Plus';

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

interface WrapperProps {
  size: IconSize;
}

const getWrapperSize = ({ size }: WrapperProps) => {
  if (size === IconSize.HUGE) {
    return '213px';
  }

  if (size === IconSize.BIG) {
    return '130px';
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
      return <Bone />;
    }

    if (name === IconName.BELL) {
      return <Bell />;
    }

    if (name === IconName.GEAR) {
      return <Gear />;
    }

    if (name === IconName.PAW) {
      return <Paw />;
    }

    if (name === IconName.SEARCH) {
      return <Search />;
    }

    if (name === IconName.SQUAREBLOCKS) {
      return <Squareblocks />;
    }

    if (name === IconName.ARROW) {
      return <Arrow />;
    }

    if (name === IconName.ARROW_LEFT) {
      return <ArrowLeft />;
    }

    if (name === IconName.MAIL) {
      return <Mail />;
    }

    if (name === IconName.PLUS) {
      return <Plus />;
    }

    return null;
  };

  public render() {
    const { name, size, ...restProps } = this.props;

    if (!name) {
      return null;
    }

    return (
      <Wrapper {...restProps} size={size}>
        {this.renderIcon()}
      </Wrapper>
    );
  }
}
