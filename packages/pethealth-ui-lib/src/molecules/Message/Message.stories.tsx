import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Message from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

const items = [
  {
    title: 'Gastointestinal problems',
    description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion.`,
    icon: '',
  },
  {
    title: null,
    description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems.`,
    icon: '',
  },
];

storiesOf('Message', module).add('Default', () => (
  <StorybookWrapper>
    {items.map((item, index) => (
      <Message {...item} key={index} />
    ))}
  </StorybookWrapper>
));
