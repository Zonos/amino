import { execSync } from 'child_process';

import { createIndexFile } from './createIndexFile';
import { createReactSVGs } from './createReactSVGs';

export const createComponentsFromSvgs = async () => {
  try {
    /** @desc Create svgs react component from input svgs */
    createReactSVGs({
      inputFolder: './svgReact/flags/svgs',
      outputFolder: './svgReact/flags/dist',
    });

    /** @desc Generate index file for generated svg react components */
    createIndexFile(`./svgReact/flags/dist`);

    // eslint-disable-next-line no-console
    console.log(`Formatting SVGs...`);
    /** @desc Format generated svg react component and new IconIndex */
    try {
      execSync('pnpm svgs:format', { encoding: 'utf8' });
    } catch {
      /** @desc Run lint --fix the first time only fix part of the fixable erros, run it again to fix all */
      execSync('pnpm svgs:format', { encoding: 'utf8' });
    }

    /** @desc Clean up all tsx/ts under flags folder (only file not folder) */
    execSync('rm -rf src/icons/flags/*.tsx src/icons/flags/*.ts', {
      encoding: 'utf-8',
    });

    // eslint-disable-next-line no-console
    console.log(`Moving output files to src...`);
    /** @desc Move file from distribution folder over */
    execSync('mv svgReact/flags/dist/* src/icons/flags', { encoding: 'utf-8' });

    // eslint-disable-next-line no-console
    console.log(`Linting all files...`);
    /** @desc Run autofix eslint */
    execSync('pnpm lint:prod --fix', { encoding: 'utf-8' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
