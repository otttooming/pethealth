import * as React from 'react';
import RX from 'reactxp';

export interface ContentProps {}

const style = {
  wrapper: RX.Styles.createTextStyle({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    paddingLeft: 60,
    paddingBottom: 8,
    color: '#000',
    opacity: 0.6,
  }),
};

class Content extends React.Component<ContentProps, any> {
  public render() {
    return (
      <RX.Text style={style.wrapper}>
        There has been a bone fracture in the section 4 and it seems it will be
        cured in 10 - 12 weeks. Right now the cast will be implemented and we
        will see if the recovery will be as fast as we are expecting.
      </RX.Text>
    );
  }
}

export default Content;
