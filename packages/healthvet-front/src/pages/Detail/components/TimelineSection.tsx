import * as React from 'react';
import styled from 'styled-components';
import CardEntry, {
  CardEntryProps,
} from '../../../components/CardEntry/CardEntry';
import Title from '../../../components/Title/Title';
import Icon, { IconName } from '../../../components/Icon/Icon';

export interface TimelineSectionProps {}

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
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

const TitleWrapper = styled.div`
  margin-bottom: 32px;
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
        <TitleWrapper>
          <Title>Patient medical history</Title>
        </TitleWrapper>
        <UnsortedList>
          {this.renderCardItems()}

          <ListItem>
            <Icon name={IconName.PLUS} />
          </ListItem>
        </UnsortedList>
      </Wrapper>
    );
  }
}
