import * as React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import MessageSection from './components/MessageSection';
import TimelineSection from './components/TimelineSection';
import PatientSection from './components/PatientSection';
import Sidebar from '../../components/Sidebar/Sidebar';
import { RouteComponentProps } from 'react-router';

interface Params {
  id: string;
}

export interface DetailProps extends RouteComponentProps<Params> {}

export default class Detail extends React.Component<DetailProps, any> {
  public render() {
    const {
      match: {
        params: { id },
        path,
      },
    } = this.props;

    const isAlternativeLayout: boolean = path.includes('post');

    return (
      <Grid columns={24} gap="0px">
        <Cell width={1}>
          <Sidebar isCollapsed={true} />
        </Cell>
        {!isAlternativeLayout && (
          <Cell width={6}>
            <PatientSection />
          </Cell>
        )}

        <Cell width={9}>
          <TimelineSection
            postId={id}
            isAlternativeLayout={isAlternativeLayout}
          />
        </Cell>
        <Cell width={isAlternativeLayout ? 14 : 8}>
          <MessageSection postId={id} />
        </Cell>
      </Grid>
    );
  }
}
