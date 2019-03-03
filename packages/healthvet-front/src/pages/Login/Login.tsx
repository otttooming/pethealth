import * as React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo-valge.svg';
import cat_img from './cat.webp';
import cat_shadow from './Kassivari.svg';
import {
  AuthLoginComponent,
  AuthLoginMutationFn,
} from '../../generated-models';
import Button from '../../components/Button/Button';

const Flex = styled.div`
  display: flex;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 55%;
  border: none;
  margin-right: -100px;
  margin-bottom: -40px;
  z-index: 1;
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
  height: 40px;
`;

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 56px;
  width: 20%;
  position: absolute;
  margin-left: 9px;
`;

const FormWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  margin-top: 440px;
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

  @media screen and (max-width: 1920px) {
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    margin-top: 440px;
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
  }

  @media screen and (max-width: 1280px) {
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
  }
`;

const LoginLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media screen and (max-width: 1920px) {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

const LoginText = styled.h1`
  color: white;
  text-align: center;
  font-size: 50px;
  font-weight: bold;

  @media screen and (max-width: 1280px) {
    color: white;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
  }

  @media screen and (max-width: 1920px) {
    color: white;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
  }
`;

const CatShadow = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 50px;
  padding-right: 100px;
  z-index: 0;
  width: 45%;

  @media screen and (max-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-bottom: 20px;
    padding-right: 30px;
    z-index: 0;
    width: 45%;
  }

  @media screen and (max-width: 1920px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-bottom: 50px;
    padding-right: 100px;
    z-index: 0;
    width: 45%;
  }
`;

interface State {
  email: string;
  password: string;
}

class Form extends React.Component<any, State> {
  state = {
    password: '',
    email: '',
  };

  render() {
    return (
      <AuthLoginComponent>
        {(request, { data }) => {
          const isLoginSuccessful = !!data && !!data.login.token;

          return (
            <FormWrapper>
              <form>
                <FlexList>
                  <LoginText>Log in</LoginText>
                  <LoginLabel>Username</LoginLabel>
                  <InputField type="text" onChange={this.setEmail} />
                  <LoginLabel>Password</LoginLabel>
                  <InputField type="password" onChange={this.setPassword} />
                  <div>
                    {isLoginSuccessful && <Redirect to="/patients" />}

                    {!isLoginSuccessful && (
                      <StyledButton onClick={this.submitLogin(request)}>
                        Submit
                      </StyledButton>
                    )}
                  </div>
                </FlexList>
              </form>
            </FormWrapper>
          );
        }}
      </AuthLoginComponent>
    );
  }

  private submitLogin = (request: AuthLoginMutationFn) => async (): Promise<
    void
  > => {
    const { password, email } = this.state;

    const options = { variables: { email, password } };

    const response = await request(options);

    const token = !!response && response.data && response.data.login.token;

    const isTokenAvailable = (
      value: string | undefined | boolean,
    ): value is string => typeof value === 'string';

    if (isTokenAvailable(token)) {
      localStorage.setItem('token', token);
    }
  };

  private setEmail = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    const email = event.currentTarget.value || '';

    this.setState({
      email,
    });
  };

  private setPassword = (
    event: React.SyntheticEvent<HTMLInputElement>,
  ): void => {
    const password = event.currentTarget.value || '';

    this.setState({
      password,
    });
  };
}

export interface LoginProps {}

// tslint:disable
export default class Login extends React.Component<LoginProps, any> {
  public render() {
    return (
      <Flex>
        <div>
          <Logo src={logo} />
          <Form />
        </div>
        <Image src={cat_img} />
        <CatShadow src={cat_shadow} />
      </Flex>
    );
  }
}
