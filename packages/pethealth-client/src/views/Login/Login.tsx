import React from 'react';
import RX from 'reactxp';
import Button from '../../components/Button';
import { ButtonType } from '../../components/Button/Button';
import withScreenSize from '../../utils/withScreenSize';
import { ScreenSizeInjectedProps } from '../../utils/withScreenSize/withScreenSize';
import {
  AuthLoginComponent,
  AuthLoginMutationFn,
} from '../../generated-models';

export type Props = ScreenSizeInjectedProps;

interface State {
  email: string;
  password: string;
}

const style = {
  center: RX.Styles.createViewStyle({
    paddingTop: 32,
    width: 256,
  }),
  footer: RX.Styles.createViewStyle({
    paddingTop: 32,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 36,
    color: '#fff',
    marginTop: 32,
  }),
  description: RX.Styles.createTextStyle({
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  }),
  image: RX.Styles.createImageStyle({
    alignItems: 'center',
    height: 192,
    width: 192,
    marginTop: 32,
  }),
  label: RX.Styles.createTextStyle({
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  }),
  input: RX.Styles.createTextInputStyle({
    borderRadius: 30,
    borderWidth: 0,
    padding: 10,
    color: '#000',
    height: 40,
    marginTop: 8,
  }),
};

class Login extends RX.Component<Props, State> {
  state = {
    email: '',
    password: '',
  };

  public render() {
    return (
      <AuthLoginComponent>
        {(request, { data }) => {
          const isLoginSuccessful = !!data && !!data.login.token;

          return (
            <RX.ScrollView>
              <RX.View style={this.getWrapperStyle()}>
                <RX.Image
                  style={style.image}
                  source="https://res.cloudinary.com/dqa53guw9/image/upload/v1550518304/logo-valge.png"
                />
                <RX.Text selectable={true} style={style.title}>
                  Log in
                </RX.Text>

                <RX.View style={style.center}>
                  <RX.Text style={style.label}>email</RX.Text>
                  <RX.TextInput
                    style={style.input}
                    onChangeText={this.setEmail}
                  />

                  <RX.Text style={style.label}>Password</RX.Text>
                  <RX.TextInput
                    style={style.input}
                    onChangeText={this.setPassword}
                  />
                </RX.View>

                <RX.View style={style.footer}>
                  {isLoginSuccessful && (
                    <Button to="/dashboard" type={ButtonType.WHITE}>
                      Go to Dashboard
                    </Button>
                  )}

                  {!isLoginSuccessful && (
                    <Button
                      type={ButtonType.WHITE}
                      onPress={this.submitLogin(request)}
                    >
                      Submit
                    </Button>
                  )}
                </RX.View>
              </RX.View>
            </RX.ScrollView>
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
      RX.Storage.setItem('token', token);
    }
  };

  private setEmail = (email: string) => {
    this.setState({
      email,
    });
  };

  private setPassword = (password: string) => {
    this.setState({
      password,
    });
  };

  private getWrapperStyle = () => {
    const {
      dimensions: { height: minHeight },
    } = this.props;

    return RX.Styles.createViewStyle({
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: 'rgb(255, 109, 109)',
      minHeight,
    });
  };
}

export default withScreenSize()<Props>(Login);
