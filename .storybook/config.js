import { configure } from '@storybook/react';

function loadStories() {
  require('../src/storybooks');
}

configure(loadStories, module);
