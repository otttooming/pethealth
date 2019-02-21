import * as React from 'react';
import RX from 'reactxp';

interface NameProps {
  name?: string;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    marginTop: 8,
  }),
  text: RX.Styles.createTextStyle({
    fontStyle: 'normal',
    fontSize: 14,
    opacity: 0.6,
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    fontWeight: 'bold',
  }),
};

const Name: React.FC<NameProps> = ({ name = null }) => {
  if (!name) {
    return null;
  }

  return (
    <RX.View style={style.wrapper}>
      <RX.Text selectable={true} style={style.text}>
        {name}
      </RX.Text>
    </RX.View>
  );
};

export default Name;
