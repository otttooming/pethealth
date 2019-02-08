import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconName, IconSize } from '../../../components/Icon/Icon';
import Button from '../../../components/Button/Button';

export interface PatientSectionProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;

const Top = styled.div`
  margin-top: 32px;
  margin-bottom: 34px;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  font-size: 32px;
  margin-bottom: 40px;
  color: #000000;
`;

interface TdProps {
  isKey?: boolean;
}

const Td = styled.td<TdProps>`
  width: 100px;
  height: 40px;
  color: ${props => ({ isKey }) => (isKey ? '#828282' : '#333333')};
`;

const Table = styled.table`
  margin-bottom: 44px;
`;

const Bottom = styled.ul`
  display: grid;
  height: auto;
  grid-auto-flow: row;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
`;

const ListItem = styled.li`
  list-style: none;
  width: 55px;
  height: 55px;

  background: #c4c4c4;
`;

export default class PatientSection extends React.Component<
  PatientSectionProps,
  any
> {
  public render() {
    return (
      <Wrapper>
        <Top>
          <Icon name={IconName.PAW} size={IconSize.BIG} />
        </Top>
        <Title>Berry Dog II</Title>

        <Table>
          <tbody>
            <tr>
              <Td isKey={true}>Species</Td>
              <Td>Dog</Td>
            </tr>
            <tr>
              <Td isKey={true}>Breed</Td>
              <Td>Yorki</Td>
            </tr>
            <tr>
              <Td isKey={true}>Sex</Td>
              <Td>Male</Td>
            </tr>
            <tr>
              <Td isKey={true}>Age</Td>
              <Td>5y</Td>
            </tr>
            <tr>
              <Td isKey={true}>Weight</Td>
              <Td>5 kg</Td>
            </tr>
          </tbody>
        </Table>

        <Bottom>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </Bottom>

        <Button>Delete</Button>
      </Wrapper>
    );
  }
}
