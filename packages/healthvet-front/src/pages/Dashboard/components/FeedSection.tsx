import * as React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import Avatar1 from './Avatar1.png';
import Avatar2 from './Avatar2.png';
import Avatar3 from './Avatar3.png';
import Avatar4 from './Avatar4.png';
import {
  GetDashboardListComponent,
  GetDashboardListQuery,
} from '../../../generated-models';
import FilterSection from '../../../components/FilterSection';

export interface FeedSectionProps {}

export interface FeedSectionState {}

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
              pathname: `/detail/${id}`,
              state: { id },
            }}
          >
            <Card
              title={title}
              date={date}
              doctor={doctor || ''}
              description={description || ''}
              hasIcons={true}
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
            <FilterSection title="Patients" />

            <UnsortedList>{this.renderCardItems(data)}</UnsortedList>
          </Wrapper>
        )}
      </GetDashboardListComponent>
    );
  }
}
