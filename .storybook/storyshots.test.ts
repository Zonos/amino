import initStoryshots from '@storybook/addon-storyshots';
import {
  CommonConfig,
  imageSnapshot,
  ImageSnapshotConfig,
} from '@storybook/addon-storyshots-puppeteer';
import puppeteer from 'puppeteer';

// https://storybook.js.org/addons/@storybook/addon-storyshots-puppeteer

const getGotoOptions: CommonConfig['getGotoOptions'] = ({ context, url }) => {
  return {
    waitUntil: 'networkidle2',
  };
};

const beforeScreenshot: ImageSnapshotConfig['beforeScreenshot'] =
  async page => {
    // Hide loading spinners as their moving parts interfere with visual regression tests
    await page.$$eval('.loading', els => {
      els.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
        }
      });
    });
  };

// All this setup and custom browser instance is necessary because we are using a local ssl-proxy, which is required for some of our tests (ConnectionMap) to fetch data.
// Can be simplified if https://github.com/storybookjs/storybook/pull/18927 ever gets merged and released.
let browser: Promise<puppeteer.Browser>;
beforeAll(() => {
  browser = puppeteer.launch({ ignoreHTTPSErrors: true });
  console.log('Browser instance created');
});

afterAll(async () => {
  const resolvedBrowser = await browser;

  const tryCloseBrowser = async (
    resolve: (value: void | PromiseLike<void>) => void
  ) => {
    let pages = await resolvedBrowser.pages();
    // IDK why 2, it just never got below 2
    // This code is very unreliable, due to having trouble synchronizing the test cases and cleanup order of an external resource (the browser instance).
    if (pages.length <= 2) {
      resolvedBrowser.close();
      console.log('Browser instance closed');
      resolve();
      return;
    }
    console.log(`Still ${pages.length} pages open. Waiting...`);
    setTimeout(() => {
      tryCloseBrowser(resolve);
    }, 500);
  };

  await new Promise<void>(async resolve => {
    tryCloseBrowser(resolve);
  });
});

describe('Visual regression testing', () => {
  initStoryshots({
    suite: 'Puppeteer storyshots',
    storyNameRegex: /^((?!.*?Spinner).)*$/,
    test: imageSnapshot({
      storybookUrl: 'https://dev.amino.zonos.com:6007',
      getCustomBrowser: () => browser,
      beforeScreenshot: beforeScreenshot,
      getGotoOptions,
    }),
  });
});
