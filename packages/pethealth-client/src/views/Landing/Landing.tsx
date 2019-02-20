import React from 'react';
import RX from 'reactxp';
import { Link } from '../../utils/routing/routing';
import Button from '../../components/Button';
import { ButtonType } from '../../components/Button/Button';
import withScreenSize from '../../utils/withScreenSize';
import { ScreenSizeInjectedProps } from '../../utils/withScreenSize/withScreenSize';

export type Props = ScreenSizeInjectedProps;

const style = {
  footer: RX.Styles.createViewStyle({
    paddingTop: 32,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 32,
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
    height: 256,
    width: 256,
    marginTop: 64,
  }),
};

class Landing extends RX.Component<Props> {
  public render() {
    return (
      <RX.ScrollView>
        <RX.View style={this.getWrapperStyle()}>
          <RX.Image
            style={style.image}
            source="https://res.cloudinary.com/dqa53guw9/image/upload/v1550518304/logo-valge.png"
          />
          <RX.Text selectable={true} style={style.title}>
            Protecting all nine lives
          </RX.Text>

          <RX.Text selectable={true} style={style.description}>
            Providing solutions that empower your vision and improve animal
            healthcare with intuitive collaboration.
          </RX.Text>

          <RX.View style={style.footer}>
            <Button to="/login" type={ButtonType.WHITE}>
              Link to login
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

export default withScreenSize()<Props>(Landing);
