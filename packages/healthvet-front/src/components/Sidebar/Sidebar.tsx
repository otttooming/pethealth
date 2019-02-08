import * as React from 'react';
import styled from 'styled-components';

export interface SidebarProps {}

const Wrapper = styled.aside`
  min-height: 100vh;
  width: 100%;

  background: #ff6d6d;
`;

export default class Sidebar extends React.Component<SidebarProps, any> {
  public render() {
    return <Wrapper />;
  }
}
