import * as React from 'react';
import styled from 'styled-components';
import CardEntry, {
  CardEntryProps,
} from '../../../components/CardEntry/CardEntry';

export interface TimelineSectionProps {}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #f4f4f4;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;

  padding-left: 40px;
  border-left: 1px solid rgba(35, 31, 32, 0.2);
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: 32px;

  &::before {
    content: '';
    position: absolute;
    border: 1px solid rgba(35, 31, 32, 0.2);
    border-bottom-width: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 27px;
    right: 0;
    left: -40px;
  }
`;

export default class TimelineSection extends React.Component<
  TimelineSectionProps,
  any
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

  renderCardItems = () => {
    return this.cardItems.map((item, key) => (
      <ListItem key={key}>
        <CardEntry {...item} />
      </ListItem>
    ));
  };

  public render() {
    return (
      <Wrapper>
        <UnsortedList>{this.renderCardItems()}</UnsortedList>
      </Wrapper>
    );
  }
}
