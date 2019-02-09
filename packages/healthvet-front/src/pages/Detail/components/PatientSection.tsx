import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconName, IconSize } from '../../../components/Icon/Icon';
import Button from '../../../components/Button/Button';
import NavigationBack from '../../../components/NavigationBack/NavigationBack';
import gallery1 from './gallery1.png';
import gallery2 from './gallery2.png';
import gallery3 from './gallery3.png';
import gallery4 from './gallery4.png';

export interface PatientSectionProps {}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;

const Top = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: Bold;
  line-height: 18px;
  font-size: 24px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
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
`;

const NavWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

export default class PatientSection extends React.Component<
  PatientSectionProps,
  any
> {
  public render() {
    return (
      <Wrapper>
        <NavWrapper>
          <NavigationBack to="/dashboard" />
        </NavWrapper>
        <Top>
          <Icon name={IconName.PAW} size={IconSize.HUGE} />
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
          <ListItem>
            <Image src={gallery2} />
          </ListItem>
          <ListItem>
            <Image src={gallery3} />
          </ListItem>
          <ListItem>
            <Image src={gallery4} />
          </ListItem>
          <ListItem>
            <Image src={gallery1} />
          </ListItem>
          <ListItem>
            <Image src={gallery1} />
          </ListItem>
          <ListItem>
            <Image src={gallery1} />
          </ListItem>
        </Bottom>

        <Button>Delete</Button>
      </Wrapper>
    );
  }
}
