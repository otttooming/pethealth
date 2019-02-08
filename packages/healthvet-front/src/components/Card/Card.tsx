import * as React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';

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
  padding: 40px;
`;

const Right = styled.div`
  padding: 28px;
  padding-right: 90px;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 24px;

  color: rgba(0, 0, 0, 0.6);
`;

const Description = styled.p`
  margin-bottom: 0;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;

  color: rgba(0, 0, 0, 0.6);
`;

export default class Card extends React.Component<CardProps, any> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <Avatar />
        </Left>
        <Right>
          <Title>Nahainfektsioon suuremal lambakoeral</Title>
          <Description>
            Kampülobakterioos on haigus, mis esineb peamiselt lindudel.
            Peamisteks nakkusallikateks ongi saastunud veekogud ja nakatunud
            lindude liha. Kui koer sööb sellist liha, siis väljutab ta
            väljaheitega nakkusohtlikke baktereid, mis võivad nakatada inimest.
            Tavaliselt...
          </Description>
        </Right>
      </Wrapper>
    );
  }
}
