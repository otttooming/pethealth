import * as React from 'react';
import RX from 'reactxp';

interface NameProps {
  title: string;
  date: string;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    marginTop: 8,
  }),
  text: RX.Styles.createTextStyle({
    // fontFamily: 'Nunito, Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24 * 1.2,
    opacity: 0.6,
    color: 'rgb(0, 0, 0)',
  }),
  date: RX.Styles.createTextStyle({
    // fontFamily: 'Nunito, Roboto, sans-serif',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 12 * 1.2,
    opacity: 0.6,
    color: 'rgb(0, 0, 0)',
  }),
};

const Title: React.FC<NameProps> = ({ title = null, date = null }) => {
  if (!title) {
    return null;
  }

  return (
    <RX.View style={style.wrapper}>
      <RX.Text selectable={true} style={style.text}>
        {title}
      </RX.Text>

      {date && (
        <RX.Text selectable={true} style={style.date}>
          {date}
        </RX.Text>
      )}
    </RX.View>
  );
};

export default Title;
