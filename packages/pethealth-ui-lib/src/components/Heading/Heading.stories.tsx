import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '../../';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Heading', module).add('Heading', () => (
  <StorybookWrapper>
    <Heading.H1>Heading</Heading.H1>
    <Heading.H2>Heading</Heading.H2>
    <Heading.H3>Heading</Heading.H3>
    <Heading.H4>Heading</Heading.H4>
    <Heading.H5>Heading</Heading.H5>
    <Heading.H6>Heading</Heading.H6>
  </StorybookWrapper>
));
