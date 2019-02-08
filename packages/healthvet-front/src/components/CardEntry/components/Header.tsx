import * as React from 'react';
import Icon, { IconName } from '../../Icon/Icon';
import styled from 'styled-components';

export interface HeaderProps {}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  margin-right: 16px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 16px;
  margin-bottom: 4px;

  color: #ff6d6d;
`;

const Time = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 10px;
  margin-bottom: 0;
  color: #b3b3b3;
`;

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <Icon name={IconName.BONE} />
        </Left>
        <Right>
          <Title>Bone fracture</Title>
          <Time>24.02.2013</Time>
        </Right>
      </Wrapper>
    );
  }
}
