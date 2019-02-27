import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { AvatarSize } from './Avatar';

const src: string =
  'https://upload.wikimedia.org/wikipedia/commons/4/4d/NASA_Apollo_17_Lunar_Roving_Vehicle.jpg';

storiesOf('Avatar', module).add('Default', () => (
  <StorybookWrapper>
    <Avatar src={src} />
    <Avatar src={src} size={AvatarSize.LARGE} />
    <Avatar src={src} size={AvatarSize.NORMAL} />
    <Avatar src={src} size={AvatarSize.SMALL} />
  </StorybookWrapper>
));
