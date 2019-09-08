import * as React from 'react';
import styled from 'styled-components';

interface CategoryCardProps {
  icon: string;
  text: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 16px rgba(254, 79, 21, 0.27);
  border-radius: 18px;
  height: 72px;
`;

const Icon = styled.img`
  margin: 20px;
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

export default class CategoryCard extends React.Component<CategoryCardProps> {
  render() {
    return (
      <Wrapper>
        <Icon src={this.props.icon} />
        <Title>{this.props.text}</Title>
      </Wrapper>
    );
  }
}
