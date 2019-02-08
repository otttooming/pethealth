import * as React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import FilterSection from './FilterSection';

export interface FeedSectionProps {}

const Wrapper = styled.div`
  background: #ffe7d6;
  min-height: 100vh;
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
  public render() {
    return (
      <Wrapper>
        <FilterSection />

        <UnsortedList>
          <ListItem>
            <Link to="/detail">
              <Card />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/detail">
              <Card />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/detail">
              <Card />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/detail">
              <Card />
            </Link>
          </ListItem>
        </UnsortedList>
      </Wrapper>
    );
  }
}
