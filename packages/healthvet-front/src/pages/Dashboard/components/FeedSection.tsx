import * as React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import FilterSection from './FilterSection';
import Avatar1 from './Avatar1.png';
import Avatar2 from './Avatar2.png';
import Avatar3 from './Avatar3.png';
import Avatar4 from './Avatar4.png';
import {
  GetDashboardListComponent,
  GetDashboardListQuery,
} from '../../../generated-models';

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
      picture: Avatar1,
    },
    {
      title: 'Max / Gastointestinal problems',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion or absorption of food, or alters its passage through the digestive tract, can be called a digestive disord... `,
      date: '24.02.2019',
      doctor: 'Dr. Bergman',
      picture: Avatar2,
    },
    {
      title: 'Captain Rio / Psittacosis',
      description: `Psittacosis, or "Parrot Fever," is a form of the Chlamydia bacterium that can affect all hookbills. The disease is highly contagious and can be passed from birds to other animals, as well as humans. Symptoms of Psittacosis include difficulty in breathing, eye inf...`,
      date: '24.02.2019',
      doctor: 'Dr. House',
      picture: Avatar3,
    },
    {
      title: 'Mr Wluffy / Worms',
      description: `Dogs are sensitive to fleas and can develop allergies causing serious skin disease. Flea allergies can be quite severe, even if fleas are not seen on your dog. Pets with flea allergies are allergic to the flea saliva and become very itchy after being bitten. Use of flea pro...`,
      date: '24.02.2019',
      doctor: 'Dr. Williams',
      picture: Avatar4,
    },
  ];

  state = {
    patients: this.patients,
  };

  renderCardItems = (data: GetDashboardListQuery | undefined) => {
    if (!data) {
      return null;
    }

    const { feed = [] } = data;

    return feed.map(
      ({
        id,
        title,
        author: { name: doctor },
        content: description,
        createdAt: date,
      }) => (
        <ListItem key={id}>
          <Link
            to={{
              pathname: '/detail',
              state: { id },
            }}
          >
            <Card
              title={title}
              date={date}
              doctor={doctor || ''}
              description={description || ''}
            />
          </Link>
        </ListItem>
      ),
    );
  };

  public render() {
    return (
      <GetDashboardListComponent>
        {({ data }) => (
          <Wrapper>
            <FilterSection />

            <UnsortedList>{this.renderCardItems(data)}</UnsortedList>
          </Wrapper>
        )}
      </GetDashboardListComponent>
    );
  }
}
