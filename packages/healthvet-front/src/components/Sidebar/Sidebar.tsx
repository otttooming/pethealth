import * as React from 'react';
import styled from 'styled-components';
import cat from './logo-valge.svg';

export interface SidebarProps {
  isCollapsed: boolean;
}

const Wrapper = styled.aside`
  min-height: 100vh;
  width: 100%;

  background: #ff6d6d;

  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MinimalWrapper = styled.aside`
  min-height: 100vh;
  width: 100%;

  background: #ff6d6d;
`;

export default class Sidebar extends React.Component<SidebarProps, any> {
  static defaultProps = {
    isCollapsed: false,
  };

  public render() {
    const { isCollapsed } = this.props;

    if (isCollapsed) {
      return <MinimalWrapper />;
    }
    return (
      <Wrapper>
        <img src={cat} alt="" />
      </Wrapper>
    );
  }
}
