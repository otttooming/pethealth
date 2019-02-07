import * as React from 'react';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

import landing_img from './doggo1.svg';
import logo from './logo-valge.svg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Flex = styled.div`
  display: flex;
`;

const FlexList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: inherit;
  border: none;
  margin: -2px;
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
  background-color: #f57171;
  border: 0;
  border-radius: 30px;
  color: white;
  width: 400px;
  height: 60px;
  text-align: center;
  font-size: 26px;
  margin: 4px 2px;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 15%;
  margin-left: 5%;
  width: 40%
  color: white;
  font-size: x-large;
  }
`;

export interface LandingProps {}

export default class Landing extends React.Component<LandingProps, any> {
  public render() {
    return (
      <Flex>
        <div>
          <Logo src={logo} />
          <FlexList>
            <ContentWrapper>
              <Text>
                With HealthVet we provide solutions that empower your vision and
                enrich animal healthcare with intuitive collaboration.
              </Text>
              <div style={{ padding: '20px' }}>
                <Link to="/login">
                  <Button1>Sign up</Button1>
                </Link>
              </div>
            </ContentWrapper>
          </FlexList>
        </div>
        <div style={{ width: '55%' }}>
          <Image src={landing_img} />
        </div>
      </Flex>
    );
  }
}
