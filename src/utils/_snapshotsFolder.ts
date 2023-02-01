import { resolve } from 'path';

// OS specific comparison. Chrome version should be tied to puppeteer version.
export const customSnapshotsDir = `${resolve(
  __dirname,
  `../../.storybook/__image_snapshots__/${process.platform}`
)}`;
