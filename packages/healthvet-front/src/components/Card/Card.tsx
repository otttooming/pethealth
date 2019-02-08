import * as React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';
import catIcon from './cat.svg';
import gutIcon from './Vector.svg';
import plusIcon from './Group.svg';

export interface CardProps {}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  /* height: 156px; */
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 16px rgba(254, 79, 21, 0.27);
  border-radius: 20px;
`;

const Left = styled.div`
  padding: 32px;
`;

const Center = styled.div`
  padding: 20px;
  padding-right: 90px;
`;

const Right = styled.div`
  padding: 32px;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 24px;
  margin-bottom: 0;

  color: rgba(0, 0, 0, 0.6);
`;

const Description = styled.p`
  margin-bottom: 0;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;
  overflow: hidden;
  height: 60px;

  color: rgba(0, 0, 0, 0.6);
`;

const Date = styled.p`
  font-style: normal;
  font-size: 12px;
  position: relative;

  color: rgba(0, 0, 0, 0.6);
`;

const Name = styled.p`
  font-style: normal;
  font-size: 14px;
  position: relative;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: bold;
`;

const Icon = styled.img`
  margin-top: 10px;
`;

export default class Card extends React.Component<CardProps, any> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <Avatar />
          <Name>Dr.Bergman</Name>
        </Left>
        <Center>
          <Title>Nahainfektsioon suuremal lambakoeral</Title>
          <Date>12.12.2018</Date>
          <Description>
            Kampülobakterioos on haigus, mis esineb peamiselt lindudel.
            Peamisteks nakkusallikateks ongi saastunud veekogud ja nakatunud
            lindude liha. Kui koer sööb sellist liha, siis väljutab ta
            väljaheitega nakkusohtlikke baktereid, mis võivad nakatada inimest.
            Tavaliselt...
          </Description>
        </Center>
        <Right>
          <Icon src={catIcon} />
          <Icon src={gutIcon} />
          <Icon src={plusIcon} />
        </Right>
      </Wrapper>
    );
  }
}
