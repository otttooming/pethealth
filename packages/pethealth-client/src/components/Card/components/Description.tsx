import * as React from 'react';
import RX from 'reactxp';

interface DescriptionProps {
  description: string | undefined;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    height: 60,
    marginTop: 16,
  }),
  text: RX.Styles.createTextStyle({
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16 * 1.2,
    opacity: 0.6,
    color: 'rgb(0, 0, 0)',
    fontWeight: 'normal',
  }),
  readMore: RX.Styles.createTextStyle({
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16 * 1.2,
    color: '#ff6d6d',
    fontWeight: 'normal',
    marginLeft: 16,
  }),
};

function getTrimmedValue(value: string, length: number) {
  return value.substring(0, length);
}

const Description: React.FC<DescriptionProps> = ({ description = null }) => {
  if (!description) {
    return null;
  }

  return (
    <RX.View style={style.wrapper}>
      <RX.Text selectable={true} style={style.text}>
        {getTrimmedValue(description, 100)}
        {'...'}
        <RX.Text style={style.readMore}>Read more</RX.Text>
      </RX.Text>
    </RX.View>
  );
};

export default Description;
