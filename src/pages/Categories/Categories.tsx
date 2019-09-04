import * as React from 'react';
import { Grid, Cell } from 'styled-css-grid';

import Sidebar from '../../components/Sidebar/Sidebar';
import MidSection from './components/MidSection';
import RightSection from './components/RightSection';

export interface CategoriesProps {}

export default class Categories extends React.Component<CategoriesProps, any> {
  public render() {
    return (
      <Grid columns={24} gap="0px">
        <Cell width={4}>
          <Sidebar />
        </Cell>
        <Cell width={16}>
          <MidSection />
        </Cell>
        <Cell width={4}>
          <RightSection />
        </Cell>
      </Grid>
    );
  }
}
