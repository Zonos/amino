import { execSync } from 'child_process';

import { optimizeSvgs } from '../build-utils/optimizeSvgs';
import { copySmallerFlags } from './copySmallerFlags';
import { createIndexFile } from './createIndexFile';
import { createReactSVGs } from './createReactSVGs';
import { downloadFlagsAWS } from './downloadFlagsAWS';
import { removeAWSErrorSvgs } from './removeAWSErrorSvgs';

const generateSvgs = async () => {
  try {
    /** @desc Dest folder */
    await downloadFlagsAWS({ destFolder: './svgReact/flags/aws-flags' });

    /** @desc Remove all AWS error svgs */
    removeAWSErrorSvgs({ folderPath: './svgReact/flags/aws-flags' });

    /** @desc Copy smaller flags size between AWS and Figma to "svgs" folder */
    await copySmallerFlags({
      destFolder: './svgReact/flags/svgs',
      firstFolder: './svgReact/flags/aws-flags',
      secondFolder: './svgReact/flags/figma-flags',
    });

    /** @desc Optimize flags in "svg" folder */
    optimizeSvgs({
      folderPath: `${__dirname}/svgs/**/*.svg`,
    });

    /** @desc Clean up distribution folder */
    execSync('rm -rf svgReact/flags/dist', { encoding: 'utf-8' });

    /** @desc Create svgs react component from input svgs */
    createReactSVGs({
      inputFolder: './svgReact/flags/svgs',
      outputFolder: './svgReact/flags/dist',
    });

    /** @desc Generate index file for generated svg react components */
    createIndexFile(`./svgReact/flags/dist`);

    /** @desc Format generated svg react component and new IconIndex */
    try {
      execSync('yarn svgs:format', { encoding: 'utf8' });
    } catch {
      /** @desc Run lint --fix the first time only fix part of the fixable erros, run it again to fix all */
      execSync('yarn svgs:format', { encoding: 'utf8' });
    }

    /** @desc Clean up all tsx/ts under flags folder (only file not folder) */
    execSync('rm -rf src/icons/flags/*.tsx src/icons/flags/*.ts', {
      encoding: 'utf-8',
    });

    /** @desc Move file from distribution folder over */
    execSync('mv svgReact/flags/dist/* src/icons/flags', { encoding: 'utf-8' });

    /** @desc Run autofix eslint */
    execSync('yarn lint:prod --fix', { encoding: 'utf-8' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

generateSvgs();
