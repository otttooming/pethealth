import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('TextField', module).add('Default', () => (
  <StorybookWrapper>
    <TextField />
  </StorybookWrapper>
));
