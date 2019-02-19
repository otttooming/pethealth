import React from 'react';
import RX from 'reactxp';
import { Link } from '../../utils/routing/routing';
import Button from '../../components/Button';
import { ButtonType } from '../../components/Button/Button';

const style = {
  wrapper: RX.Styles.createViewStyle({
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 109, 109)',
    height: '100%' as any,
  }),
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

class Landing extends RX.Component {
  public render() {
    return (
      <RX.ScrollView>
        <RX.View style={style.wrapper}>
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
            <Link to="/login">
              <Button type={ButtonType.WHITE}>Link to login</Button>
            </Link>
          </RX.View>
        </RX.View>
      </RX.ScrollView>
    );
  }
}

export default Landing;
