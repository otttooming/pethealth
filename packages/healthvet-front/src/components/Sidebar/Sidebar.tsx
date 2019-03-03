import * as React from 'react';
import styled from 'styled-components';
import cat from './logo-valge.svg';
import { Link, NavLink } from 'react-router-dom';

export interface SidebarProps {
  isCollapsed: boolean;
}

const Wrapper = styled.aside`
  min-height: 100vh;
  width: 100%;

  background: #ff6d6d;

  padding: 0;
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
  width: 100%;
  margin-top: 24px;
`;

const Menu = styled.ul`
  margin-top: 72px;
  list-style: none;
  padding-left: 0;
  width: 100%;
`;

const MenuItem = styled.li`
  margin-bottom: 16px;
  width: 100%;
  text-align: left;
  line-height: 54px;
  text-indent: 67px;
`;

const StyledNavLink = styled(NavLink)`
  margin-bottom: 16px;
  font-family: Nunito;
  font-weight: 800;
  font-size: 26px;
  color: white;
  width: 100%;
  text-align: left;
  line-height: 54px;
  text-indent: 67px;
  display: block;
  :hover {
    color: #d9d9d9;
  }
`;

const HomeLink = styled(Link)`
  margin: 0;
  width: 80%;
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
        <HomeLink
          to={{
            pathname: '/',
          }}
        >
          <Image src={cat} />
        </HomeLink>

        <Menu>
          <MenuItem className="menuItem">
            <StyledNavLink
              to={{
                pathname: `/patients`,
              }}
              activeStyle={{
                background: '#E75A5A',
                borderLeftStyle: 'solid',
                borderLeftWidth: '8px',
                borderLeftColor: 'white',
              }}
            >
              Patients
            </StyledNavLink>
          </MenuItem>
          <MenuItem className="menuItem">
            <StyledNavLink
              to={{
                pathname: `/browse`,
              }}
              activeStyle={{
                background: '#E75A5A',
                borderLeftStyle: 'solid',
                borderLeftWidth: '8px',
                borderLeftColor: 'white',
              }}
            >
              Browse
            </StyledNavLink>
          </MenuItem>
          <MenuItem className="menuItem">
            <StyledNavLink
              to={{
                pathname: `/categories`,
              }}
              activeStyle={{
                background: '#E75A5A',
                borderLeftStyle: 'solid',
                borderLeftWidth: '8px',
                borderLeftColor: 'white',
              }}
            >
              Categories
            </StyledNavLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    );
  }
}
