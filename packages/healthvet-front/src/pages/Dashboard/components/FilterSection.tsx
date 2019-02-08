import * as React from 'react';
import Search from '../../../components/Search/Search';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';
import Icon, { IconName } from '../../../components/Icon/Icon';
import Squareblocks from '../../../components/Icon/components/Squareblocks';
import Select from '../../../components/Select/Select';

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

const Questions = styled.p`
  margin-bottom: 0;
  margin-right: 16px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
`;
const RightTop = styled.div`
  margin-bottom: 32px;
`;
const LeftTop = styled.div`
  margin-bottom: 32px;
`;

const Left = styled.div`
  margin-bottom: 32px;
`;

const RightBottom = styled.div`
  display: flex;
  align-items: center;
`;

export default class FilterSection extends React.Component<FilterSectionProps> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <RightTop>
            <Search />
          </RightTop>
          <RightBottom>
            <Questions>Forum questions</Questions>
            <Select>Filter</Select>
          </RightBottom>
        </Left>
        <Right>
          <LeftTop>
            <Button>Post</Button>
          </LeftTop>
          <Icon name={IconName.SQUAREBLOCKS} />
        </Right>
      </Wrapper>
    );
  }
}
