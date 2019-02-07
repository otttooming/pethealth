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
  width: -webkit-fill-available;
  padding: 10px;
  color: black;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 80px;
`;

const FormWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 10%;
  margin-left: 15%;
  width: 20%
  color: white;
  font-size: x-large;

  input[type=submit] {
    background: #F57171;
    color: white;

    &:hover {
      opacity: 0.6;
    }
  }

  input[type=text] {
    padding-left: 20px;
    padding-right: 20px;
  }

  input[type=password] {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const LoginLabel = styled.label`
  font-size: 30px;
`;

const LoginText = styled.h1`
  color: white;
  text-align: center;
`;

function Form() {
  const submitStyle = {
    paddingTop: '20px',
  };

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
