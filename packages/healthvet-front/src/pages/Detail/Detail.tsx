import * as React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import MessageSection from './components/MessageSection';
import TimelineSection from './components/TimelineSection';
import PatientSection from './components/PatientSection';
import Sidebar from '../../components/Sidebar/Sidebar';

export interface DetailProps {}

export default class Detail extends React.Component<DetailProps, any> {
  public render() {
    return (
      <Grid columns={24} gap="0px">
        <Cell width={1}>
          <Sidebar />
        </Cell>
        <Cell width={7}>
          <PatientSection />
        </Cell>
        <Cell width={8}>
          <TimelineSection />
        </Cell>
        <Cell width={8}>
          <MessageSection />
        </Cell>
      </Grid>
    );
  }
}
