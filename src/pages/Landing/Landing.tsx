import * as React from 'react';
import styled from 'styled-components';
import landing_img from './doctor.webp';
import logo from './logo-valge.svg';
import { Link } from 'react-router-dom';

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
  width: 20%;
  position: absolute;
  margin-left: 9px;
`;

const StyledH2 = styled.h2`
  color: white;
  font-size: 20px;
  padding-left: 20px;

  @media screen and (max-width: 1920px) {
    color: white;
    font-size: 20px;
    padding-left: 20px;
  }

  @media screen and (max-width: 1280px) {
    color: white;
    font-size: 16px;
    padding-left: 20px;
  }
`;

const StyledH1 = styled.h1`
  font-weight: bold;
  padding-top: 144px;
  color: white;
  font-size: 50px;
  padding-left: 20px;

  @media screen and (max-width: 1920px) {
    font-weight: bold;
    padding-top: 144px;
    color: white;
    font-size: 50px;
    padding-left: 20px;
  }

  @media screen and (max-width: 1280px) {
    font-weight: bold;
    padding-top: 144px;
    color: white;
    font-size: 36px;
    padding-left: 20px;
  }
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
  font-weight: bold;
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
  margin-left: 80px;
  margin-top: 400px;
  width: 55%;
  color: white;

  @media screen and (max-width: 1920px) {
    position: relative;
    left: 0;
    margin-left: 80px;
    margin-top: 400px;
    width: 55%;
    color: white;
  }

  @media screen and (max-width: 1280px) {
    position: relative;
    left: 0;
    margin-left: 56px;
    margin-top: 240px;
    width: 60%;
    color: white;
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
                Providing solutions that empower your vision and improve animal
                healthcare with intuitive collaboration.
              </StyledH2>
              <ButtonWrapper>
                <Link to="/login">
                  <Button1>Log in</Button1>
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
