import * as React from 'react';
import { GlobalStyle } from '../../atoms/GlobalStyle/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 32px;
`;

export interface StorybookWrapperProps {}

class StorybookWrapper extends React.Component<StorybookWrapperProps, any> {
  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <GlobalStyle />

        {children}
      </Wrapper>
    );
  }
}

export default StorybookWrapper;
