import * as React from 'react';
import RX from 'reactxp';

export interface RightSectionProps {}

const style = {
  wrapper: RX.Styles.createViewStyle({
    flex: 1,
    overflow: 'visible',
    justifyContent: 'flex-end',
    padding: 32,
    backgroundColor: '#ffe7d6',
  }),
  image: RX.Styles.createImageStyle({
    alignSelf: 'flex-end',
    width: 150,
    height: 150,
  }),
};

class RightSection extends React.Component<RightSectionProps, any> {
  public render() {
    return (
      <RX.View style={style.wrapper}>
        <RX.Image
          style={style.image}
          source="https://res.cloudinary.com/dqa53guw9/image/upload/v1550520693/kass.png"
        />
      </RX.View>
    );
  }
}

export default RightSection;
