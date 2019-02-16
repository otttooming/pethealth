import RX from 'reactxp';
import * as React from 'react';

export interface ImageProps {
  source: string;
}

const style = RX.Styles.createViewStyle({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
});

class Image extends RX.Component<ImageProps, any> {
  public render() {
    const { source } = this.props;
    return <RX.Image style={style} resizeMode="cover" source={source} />;
  }
}

export default Image;
