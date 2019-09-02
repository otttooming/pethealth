import * as React from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Sidebar from '../../components/Sidebar/Sidebar';
import FeedSection from './components/ForumFeed';
import SidebarSecondary from '../../components/SidebarSecondary';

export interface ForumProps {}

export default class Forum extends React.Component<ForumProps, any> {
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
          <SidebarSecondary type="bird" />
        </Cell>
      </Grid>
    );
  }
}
