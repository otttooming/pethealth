import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon, { IconName } from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

storiesOf('Icon', module).add('Default', () => (
  <StorybookWrapper>
    {Object.values(IconName).map((name, index) => (
      <Icon name={name} key={index} />
    ))}
  </StorybookWrapper>
));
