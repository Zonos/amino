import initStoryshots from '@storybook/addon-storyshots';
import {
  type PuppeteerTestConfig,
  puppeteerTest,
} from '@storybook/addon-storyshots-puppeteer';
import { resolve } from 'path';

// https://storybook.js.org/addons/@storybook/addon-storyshots-puppeteer
// https://github.com/americanexpress/jest-image-snapshot

describe('Visual regression testing', () => {
  // We want to run the live version locally because we already have it running. In CI we need to prebuild the static storybook and run it off that instead.
  const config: Partial<PuppeteerTestConfig> = {
    ...(process.env.CI && {
      storybookUrl: `file://${resolve(__dirname, '../../storybook-static')}`,
    }),
  };

  // eslint-disable-next-line no-console
  console.log('Puppeteer config: ', config);

  // https://github.com/storybookjs/storybook/tree/main/addons/storyshots/storyshots-puppeteer#puppeteertest
  initStoryshots({
    suite: 'Puppeteer storyshots',
    test: puppeteerTest(config),
  });
});
