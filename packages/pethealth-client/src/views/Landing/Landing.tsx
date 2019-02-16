import React from 'react';
import RX from 'reactxp';
import { Link } from '../../utils/routing/routing';

const myViewStyle = RX.Styles.createViewStyle({
  backgroundColor: '#fff',
  shadowOpacity: 0.75,
  shadowRadius: 5,
  shadowColor: 'red',
  shadowOffset: { height: 0, width: 0 },
  // alignSelf: 'stretch',
});

class Landing extends RX.Component {
  public render() {
    return (
      <RX.ScrollView style={myViewStyle}>
        <RX.ScrollView>
          <RX.Text selectable={true}>Landing view</RX.Text>
          <RX.Text>ABC</RX.Text>
        </RX.ScrollView>

        <RX.ScrollView>
          <RX.Text selectable={true}>Landing view</RX.Text>
          <RX.Text>ABC</RX.Text>
          <Link to="/login">
            <RX.Text>Link to login</RX.Text>
          </Link>
        </RX.ScrollView>
      </RX.ScrollView>
    );
  }
}

export default Landing;
