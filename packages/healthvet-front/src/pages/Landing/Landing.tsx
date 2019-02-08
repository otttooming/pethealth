import * as React from 'react';
import { Button, Layout } from 'antd';
import styled from 'styled-components';
import hover_gif from './hover-gif.gif';
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
  width: 60%;
  border: none;
`;

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 56px;
  width: 15%;
  position: absolute;
`;

const StyledH2 = styled.h2`
  padding-top: ;
  color: white;
  font-size: 16px;
  padding-left: 20px;
`;

const StyledH1 = styled.h1`
  font-weight: bold;
  padding-top: 144px;
  color: white;
  font-size: 36px;
  padding-left: 20px;
`;

const Button1 = styled.button`
  position: absolute;
  background-color: #f57171;
  border: 0;
  border-radius: 30px;
  color: white;
  width: 300px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  margin: 4px 2px;
  opacity: 1;
  cursor: pointer;

  &:hover {
    background-color: #e06666;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  left: 0;
  margin-left: 56px;
  margin-top: 240px;
  width: 60%
  color: white;
  font-size: x-large;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 36px;
  margin-left: 16px;
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
              <StyledH1>Protecting all nine lives</StyledH1>
              <StyledH2>
                With PetHealth we provide solutions that empower your vision and
                enrich animal healthcare with intuitive collaboration.
              </StyledH2>
              <ButtonWrapper>
                <Link to="/login">
                  <Button1>Sign up</Button1>
                </Link>
              </ButtonWrapper>
            </ContentWrapper>
          </FlexList>
        </div>
        <Image src={landing_img} />
      </Flex>
    );
  }
}
