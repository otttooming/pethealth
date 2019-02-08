import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Content from './components/Content';

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
