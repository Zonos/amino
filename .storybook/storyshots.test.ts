import initStoryshots from '@storybook/addon-storyshots';
import { puppeteerTest } from '@storybook/addon-storyshots-puppeteer';

// https://storybook.js.org/addons/@storybook/addon-storyshots-puppeteer
// https://github.com/americanexpress/jest-image-snapshot

describe.only('Visual regression testing', () => {
  // https://github.com/storybookjs/storybook/tree/main/addons/storyshots/storyshots-puppeteer#puppeteertest
  initStoryshots({
    suite: 'Puppeteer storyshots',
    test: puppeteerTest(),
  });
});
