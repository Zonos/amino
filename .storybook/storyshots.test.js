import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  suite: 'Puppeteer storyshots',
  // storyKindRegex: /.*Avatar.*/,
  test: imageSnapshot({
    // storybookUrl: 'https://amino-dev.zonos.com:6007',
    storybookUrl: 'http://localhost:6006',
  }),
});
