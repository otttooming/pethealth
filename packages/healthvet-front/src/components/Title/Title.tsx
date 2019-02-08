import * as React from 'react';
import styled from 'styled-components';

export interface TitleProps {}

const SectionTitle = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 1.5;
  font-size: 26px;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.6);
`;

export default class Title extends React.Component<TitleProps, any> {
  public render() {
    const { children } = this.props;
    return <SectionTitle>{children}</SectionTitle>;
  }
}
