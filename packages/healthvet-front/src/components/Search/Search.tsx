import * as React from 'react';
import Icon, { IconName, IconSize } from '../Icon/Icon';
import styled from 'styled-components';

export interface SearchProps {}

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  margin-right: 4px;
`;

const Content = styled.div`
  margin-bottom: 0;
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
