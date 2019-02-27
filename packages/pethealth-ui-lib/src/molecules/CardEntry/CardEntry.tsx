import * as React from 'react';
import styled from 'styled-components';
import Header from './atoms/Header';
import Footer from './atoms/Footer';
import Content from './atoms/Content';

export interface CardEntryProps {
  title: string;
  icon: string;
  date: string;
  personId: number;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  width: 100%;
  min-height: 182px;

  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  padding-right: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 16px 0 0 0;

  &:first-child {
    margin-top: 0;
  }
`;

export default class CardEntry extends React.Component<CardEntryProps, any> {
  public render() {
    return (
      <Wrapper>
        <Header />

        <Content />

        <Footer />
      </Wrapper>
    );
  }
}
