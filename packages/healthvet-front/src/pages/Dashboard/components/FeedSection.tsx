import * as React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import FilterSection from './FilterSection';

export interface FeedSectionProps {}
export interface FeedSectionState {
  patients: CardProps[];
}

const Wrapper = styled.div`
  background: #ffe7d6;
  height: 100vh;
  overflow-y: scroll;
  padding: 32px;
`;

const ListItem = styled.li`
  list-style: none;
  display: block;
  margin-bottom: 32px;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;
`;

export default class FeedSection extends React.Component<
  FeedSectionProps,
  any
> {
  patients: CardProps[] = [
    {
      title: 'Mr Wluffy / Worms',
      description: `Cats can get infected by tapeworms, hookworms and whipworms. They get tapeworms by ingesting fleas infected with tapeworm eggs or by eating infected rodents. “The entire worm matures in the large intestine of the cat,” Lund said. “[Then] pieces of th...`,
      date: '24.02.2019',
      doctor: 'Dr. Elina',
    },
    {
      title: 'Max / Gastointestinal problems',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion or absorption of food, or alters its passage through the digestive tract, can be called a digestive disord... `,
      date: '24.02.2019',
      doctor: 'Dr. Bergman',
    },
    {
      title: 'Captain Rio / Psittacosis',
      description: `Psittacosis, or "Parrot Fever," is a form of the Chlamydia bacterium that can affect all hookbills. The disease is highly contagious and can be passed from birds to other animals, as well as humans. Symptoms of Psittacosis include difficulty in breathing, eye inf...`,
      date: '24.02.2019',
      doctor: 'Dr. House',
    },
    {
      title: 'Mr Wluffy / Worms',
      description: `Cats can get infected by tapeworms, hookworms and whipworms. They get tapeworms by ingesting fleas infected with tapeworm eggs or by eating infected rodents. “The entire worm matures in the large intestine of the cat,” Lund said. “[Then] pieces of th...`,
      date: '24.02.2019',
      doctor: 'Dr. Elina',
    },
    {
      title: 'Max / Gastointestinal problems',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion or absorption of food, or alters its passage through the digestive tract, can be called a digestive disord... `,
      date: '24.02.2019',
      doctor: 'Dr. Bergman',
    },
    {
      title: 'Captain Rio / Psittacosis',
      description: `Psittacosis, or "Parrot Fever," is a form of the Chlamydia bacterium that can affect all hookbills. The disease is highly contagious and can be passed from birds to other animals, as well as humans. Symptoms of Psittacosis include difficulty in breathing, eye inf...`,
      date: '24.02.2019',
      doctor: 'Dr. House',
    },
    {
      title: 'Mr Wluffy / Worms',
      description: `Cats can get infected by tapeworms, hookworms and whipworms. They get tapeworms by ingesting fleas infected with tapeworm eggs or by eating infected rodents. “The entire worm matures in the large intestine of the cat,” Lund said. “[Then] pieces of th...`,
      date: '24.02.2019',
      doctor: 'Dr. Elina',
    },
    {
      title: 'Max / Gastointestinal problems',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion or absorption of food, or alters its passage through the digestive tract, can be called a digestive disord... `,
      date: '24.02.2019',
      doctor: 'Dr. Bergman',
    },
    {
      title: 'Captain Rio / Psittacosis',
      description: `Psittacosis, or "Parrot Fever," is a form of the Chlamydia bacterium that can affect all hookbills. The disease is highly contagious and can be passed from birds to other animals, as well as humans. Symptoms of Psittacosis include difficulty in breathing, eye inf...`,
      date: '24.02.2019',
      doctor: 'Dr. House',
    },
  ];

  state = {
    patients: this.patients,
  };

  renderCardItems = () => {
    const { patients } = this.state;

    return patients.map((item, index) => (
      <ListItem key={index}>
        {' '}
        <Link to="/detail">
          <Card {...item} />
        </Link>
      </ListItem>
    ));
  };

  public render() {
    return (
      <Wrapper>
        <FilterSection />

        <UnsortedList>{this.renderCardItems()}</UnsortedList>
      </Wrapper>
    );
  }
}
