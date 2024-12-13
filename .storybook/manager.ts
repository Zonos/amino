import { addons } from '@storybook/manager-api';
import {
  defaultConfig,
  type TagBadgeParameters,
} from 'storybook-addon-tag-badges';

import storybookTheme from './storybookTheme';

addons.setConfig({
  tagBadges: [
    // Add an entry that matches 'frog' and displays a cool badge in the sidebar only
    {
      badge: {
        bgColor: '#afa',
        fgColor: '#000',
        text: 'Tested',
        tooltip: 'This component has tests',
      },
      display: {
        sidebar: ['component', 'story', 'docs', 'group'],
      },
      tags: 'tested',
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
  theme: storybookTheme,
});
