import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardEntry from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

const items = [
  {
    title: '',
    icon: '',
    date: '',
    personId: 1,
  },
  {
    title: '',
    icon: '',
    date: '',
    personId: 1,
  },
  {
    title: '',
    icon: '',
    date: '',
    personId: 1,
  },
  {
    title: '',
    icon: '',
    date: '',
    personId: 1,
  },
];

storiesOf('CardEntry', module).add('Default', () => (
  <StorybookWrapper>
    {items.map((item, index) => (
      <CardEntry {...item} key={index} />
    ))}
  </StorybookWrapper>
));
