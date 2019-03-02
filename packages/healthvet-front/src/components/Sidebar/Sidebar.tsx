import * as React from 'react';
import styled from 'styled-components';
import cat from './logo-valge.svg';
import { Link } from 'react-router-dom';

export interface SidebarProps {
  isCollapsed: boolean;
}

const Wrapper = styled.aside`
  min-height: 100vh;
  width: 100%;

  background: #ff6d6d;

  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MinimalWrapper = styled.aside`
  min-height: 100vh;
  width: 100%;

  background: #ff7070;
`;

const Image = styled.img`
  width: 90%;
  margin-top: 8px;
`;

const Menu = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  font-family: Nunito;
  font-weight: 800;
  font-size: 24px;
  color: white;
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
        <Image src={cat} />
        <Menu>
          <Link
            to={{
              pathname: `/dashboard`,
            }}
          >
            <MenuItem>Patients</MenuItem>
          </Link>
          <Link
            to={{
              pathname: `/dashboard`,
            }}
          >
            <MenuItem>Browse</MenuItem>
          </Link>
          <Link
            to={{
              pathname: `/categories`,
            }}
          >
            <MenuItem>Categories</MenuItem>
          </Link>
        </Menu>
      </Wrapper>
    );
  }
}
