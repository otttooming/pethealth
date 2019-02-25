import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

function loadStories() {
  const req = require.context('../src/', true, /\.stories\.tsx?$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
