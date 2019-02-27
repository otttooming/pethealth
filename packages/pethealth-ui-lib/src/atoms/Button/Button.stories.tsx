import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Button', module).add('Default', () => (
  <StorybookWrapper>
    <Button>Click me</Button>
  </StorybookWrapper>
));
