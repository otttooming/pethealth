import * as React from 'react';
import RX from 'reactxp';
import CardEntry, { CardEntryProps } from '../CardEntry/CardEntry';
import Icon, { IconName } from '../../components/Icon/Icon';

export interface TimelineSectionProps {}

export interface TimelineSectionState {
  cardItems: CardEntryProps[];
}

export interface ButtonProps {}

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    backgroundColor: '#f4f4f4',
    padding: 32,
  }),
  titleWrapper: RX.Styles.createViewStyle({
    marginBottom: 32,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 26,
    color: 'rgba(0, 0, 0, 0.6)',
  }),
  listWrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    marginBottom: 32,
  }),
  listItem: RX.Styles.createViewStyle({
    overflow: 'visible',
    marginBottom: 32,
  }),
};

class Timeline extends React.Component<
  TimelineSectionProps,
  TimelineSectionState
> {
  cardItems: CardEntryProps[] = [
    {
      title: '',
      icon: '',
      date: '',
      personId: 1,
    },
    {
      title: '',
      icon: '',
      date: '',
      personId: 1,
    },
    {
      title: '',
      icon: '',
      date: '',
      personId: 1,
    },
    {
      title: '',
      icon: '',
      date: '',
      personId: 1,
    },
  ];

  state = {
    cardItems: this.cardItems,
  };

  addItem = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const { cardItems } = this.state;

    const card = {
      title: '',
      icon: '',
      date: '',
      personId: 1,
    };

    this.setState({
      cardItems: [...cardItems, card],
    });
  };

  renderCardItems = () => {
    const { cardItems } = this.state;

    return cardItems.map((item, key) => (
      <RX.View style={style.listItem} key={key}>
        <CardEntry {...item} />
      </RX.View>
    ));
  };

  public render() {
    return (
      <RX.View style={style.wrapper}>
        <RX.View style={style.titleWrapper}>
          <RX.Text style={style.title}>Patient medical history</RX.Text>
        </RX.View>

        <RX.View style={style.listWrapper}>
          {this.renderCardItems()}

          <RX.View style={style.listItem}>
            <RX.Button onPress={this.addItem}>
              <Icon name={IconName.PLUS} />
            </RX.Button>
          </RX.View>
        </RX.View>
      </RX.View>
    );
  }
}

export default Timeline;
