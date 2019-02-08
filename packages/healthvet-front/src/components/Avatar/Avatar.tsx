import * as React from 'react';
import avatar from './avatar.png';
import styled from 'styled-components';

export enum AvatarSize {
  MEDIUM = 'medium',
  NORMAL = 'normal',
  SMALL = 'small',
}

export interface AvatarProps {
  size: AvatarSize;
}

interface FigureProps {
  size: AvatarSize;
}

const getFigureSize = ({ size }: FigureProps) => {
  if (size === AvatarSize.SMALL) {
    return '27px';
  }

  if (size === AvatarSize.NORMAL) {
    return '48px';
  }

  return '91px';
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

export default class Avatar extends React.Component<AvatarProps, any> {
  static defaultProps = {
    size: AvatarSize.MEDIUM,
  };

  public render() {
    const { size } = this.props;

    return (
      <Figure size={size}>
        <Image src={avatar} alt="" />
      </Figure>
    );
  }
}
