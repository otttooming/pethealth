import * as React from 'react';
import styled from 'styled-components';

export enum AvatarSize {
  DEFAULT = 'default',
  LARGE = 'large',
  NORMAL = 'normal',
  SMALL = 'small',
}

export interface AvatarProps {
  size: AvatarSize;
  src: string;
}

interface FigureProps {
  size: AvatarSize;
}

const getFigureSize = ({ size }: FigureProps) => {
  if (size === AvatarSize.SMALL) {
    return '24px';
  }

  if (size === AvatarSize.NORMAL) {
    return '48px';
  }

  if (size === AvatarSize.LARGE) {
    return '72px';
  }

  return '96px';
};

const Figure = styled.figure<FigureProps>`
  position: relative;
  margin-bottom: 0;
  width: ${props => getFigureSize(props)};
  height: ${props => getFigureSize(props)};
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
  background: #c4c4c4;
`;

class Avatar extends React.Component<AvatarProps, any> {
  static defaultProps = {
    size: AvatarSize.DEFAULT,
    src: '',
  };

  public render() {
    const { size, src } = this.props;

    return (
      <Figure size={size}>
        <Image src={src} alt="" />
      </Figure>
    );
  }
}

export default Avatar;
