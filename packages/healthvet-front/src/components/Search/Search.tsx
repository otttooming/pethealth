import * as React from 'react';
import Icon, { IconName, IconSize } from '../Icon/Icon';
import styled from 'styled-components';

export interface SearchProps {}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  margin-right: 8px;
`;

const Content = styled.div`
  margin-bottom: 0;

  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  font-size: 22px;

  color: #807773;
`;

export default class Search extends React.Component<SearchProps, any> {
  public render() {
    return (
      <Wrapper>
        <Left>
          <Icon name={IconName.SEARCH} size={IconSize.SMALL} />
        </Left>
        <Content>Search</Content>
      </Wrapper>
    );
  }
}
