import * as React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo-valge.svg';
import cat_img from './kass.svg';

const Flex = styled.div`
  display: flex;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40%;
  border: none;
  margin: -1px;
`;

const FlexList = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  border-radius: 30px;
  border: none;
  padding: 10px;
  color: black;
  outline: none;
  width: 300px;
  heigth: 40px;
`;

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 56px;
  width: 15%;
  position: absolute;
`;

const FormWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  margin-top: 250px;
  margin-left: 200px;

  input[type='submit'] {
    margin-top: 25px;
    background: #f57171;
    color: white;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      background-color: #e06666;
    }
  }

  input[type='text'] {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }

  input[type='password'] {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
`;

const LoginLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const LoginText = styled.h1`
  color: white;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

function Form() {
  return (
    <FormWrapper>
      <form>
        <FlexList>
          <LoginText>Log in</LoginText>
          <LoginLabel>Username</LoginLabel>
          <InputField type="text" />
          <LoginLabel>Password</LoginLabel>
          <InputField type="password" />
          <div>
            <Link to="/dashboard">
              <InputField type="submit" color="#f4511e" />
            </Link>
          </div>
        </FlexList>
      </form>
    </FormWrapper>
  );
}

export interface LoginProps {}

export default class Login extends React.Component<LoginProps, any> {
  public render() {
    return (
      <Flex>
        <div>
          <Logo src={logo} />
          <Form />
        </div>
        <Image src={cat_img} />
      </Flex>
    );
  }
}
