import * as React from 'react';
import styled from 'styled-components';
import avatar from './Avatar1.svg';
import { Avatar } from '@coterminous/ui';

interface FooterProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Footer: React.FC<FooterProps> = props => (
  <Wrapper>
    <Avatar title="Dr. Alice">
      <img src={avatar} alt="" />
    </Avatar>
  </Wrapper>
);

export default Footer;
