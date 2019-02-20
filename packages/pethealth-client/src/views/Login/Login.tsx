import React from 'react';
import RX from 'reactxp';
import Button from '../../components/Button';
import { ButtonType } from '../../components/Button/Button';
import withScreenSize from '../../utils/withScreenSize';
import { ScreenSizeInjectedProps } from '../../utils/withScreenSize/withScreenSize';

export type Props = ScreenSizeInjectedProps;

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

class Login extends RX.Component<Props> {
  public render() {
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
            <RX.Text style={style.label}>Username</RX.Text>
            <RX.TextInput style={style.input} />

            <RX.Text style={style.label}>Password</RX.Text>
            <RX.TextInput style={style.input} />
          </RX.View>

          <RX.View style={style.footer}>
            <Button to="/dashboard" type={ButtonType.WHITE}>
              Submit
            </Button>
          </RX.View>
        </RX.View>
      </RX.ScrollView>
    );
  }

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
