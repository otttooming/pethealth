import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconName } from '../../../components/Icon/Icon';

export interface FilterSectionProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  margin-right: 16px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.5);
`;

const Left = styled.div`
  margin-bottom: 32px;
`;

export default class FilterSection extends React.Component<FilterSectionProps> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <Title>Categories</Title>
        </Left>
        <Right>
          <Icon name={IconName.SQUAREBLOCKS} />
        </Right>
      </Wrapper>
    );
  }
}
