import * as React from 'react';
import Avatar, { AvatarSize } from '../Avatar/Avatar';
import styled from 'styled-components';
import Icon, { IconName, IconSize } from '../Icon/Icon';
import { Link } from 'react-router-dom';
import avatar from './Avatar1.png';

export interface ControlBarProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Left = styled.div`
  margin-right: 16px;
`;

const Middle = styled.div`
  margin-right: 24px;
`;

export default class ControlBar extends React.Component<ControlBarProps, any> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <Icon name={IconName.BELL} size={IconSize.SMALL} />
        </Left>
        <Middle>
          <Icon name={IconName.GEAR} size={IconSize.SMALL} />
        </Middle>
        <Link to="/404">
          <Avatar size={AvatarSize.NORMAL} src={avatar} />
        </Link>
      </Wrapper>
    );
  }
}
