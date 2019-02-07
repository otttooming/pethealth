import * as React from 'react';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

import landing_img from './doggo1.svg';
import logo from './logo-valge.svg';
import { Redirect } from 'react-router';

const { Content } = Layout;

const Flex = styled.div`
  display: flex;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
`;

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 80px;
`;

const Text = styled.h2`
  padding-top: 20%;
  padding-bottom: 5%;
  color: white;
  font-size: xx-large;
  padding-left: 20px;
`;

const Button1 = styled.button`
  position: absolute;
  background-color: #f4511e;
  border: 0;
  border-radius: 12px;
  color: white;
  width: 400px;
  height: 60px;
  text-align: center;
  font-size: px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export interface LandingProps {}

export default class Landing extends React.Component<LandingProps, any> {
  handleSignIn() {}

  public render() {
    return (
      <Flex>
        <ul
          style={{
            listStyleType: 'none',
            width: '50%',
            position: 'relative',
          }}
        >
          <li>
            <Logo src={logo} />
          </li>
          <li>
            <Text>
              With HealthVet we provide solutions that empower your vision and
              enrich animal healthcare with intuitive collaboration.
            </Text>
          </li>
          <li>
            <div style={{ padding: '20px' }}>
              <Button1 onClick={() => this.handleSignIn()}>Sign up</Button1>
            </div>
          </li>
        </ul>
        <Image src={landing_img} />
      </Flex>
    );
  }
}
