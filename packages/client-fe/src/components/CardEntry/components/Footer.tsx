import * as React from 'react';
import Avatar, { AvatarSize } from '../../Avatar/Avatar';
import styled from 'styled-components';
import avatar from './Avatar1.svg';

interface FooterProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  margin-right: 16px;
`;

const Name = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 12px;
  color: #ff6d6d;
  margin-bottom: 0;
`;

const Footer: React.FC<FooterProps> = props => (
  <Wrapper>
    <Left>
      <Avatar size={AvatarSize.SMALL} src={avatar} />
    </Left>
    <Name>Dr. Alice</Name>
  </Wrapper>
);

export default Footer;
