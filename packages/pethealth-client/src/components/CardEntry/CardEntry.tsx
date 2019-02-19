import * as React from 'react';
import RX from 'reactxp';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export interface CardEntryProps {
  title: string;
  icon: string;
  date: string;
  personId: number;
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    justifyContent: 'space-between',
    maxWidth: 400,
    minHeight: 182,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    shadowRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { height: 0, width: 0 },
  }),
};

class CardEntry extends React.Component<CardEntryProps, any> {
  public render() {
    return (
      <RX.View style={style.wrapper}>
        <Header />

        <Content />

        <Footer />
      </RX.View>
    );
  }
}

export default CardEntry;
