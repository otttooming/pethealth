import * as React from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Sidebar from '../../components/Sidebar/Sidebar';
import FeedSection from './components/FeedSection';
import SidebarSecondary from '../../components/SidebarSecondary';

export interface DetailProps {}

export default class Detail extends React.Component<DetailProps, any> {
  public render() {
    return (
      <Grid columns={24} gap="0px">
        <Cell width={4}>
          <Sidebar />
        </Cell>
        <Cell width={16}>
          <FeedSection />
        </Cell>
        <Cell width={4}>
          <SidebarSecondary type="cat" />
        </Cell>
      </Grid>
    );
  }
}
