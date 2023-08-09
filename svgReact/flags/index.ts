import { execSync } from 'child_process';
import { optimizeSvgs } from 'svgReact/build-utils/optimizeSvgs';
import { copySmallerFlags } from 'svgReact/flags/copySmallerFlags';
import { createIndexFile } from 'svgReact/flags/createIndexFile';
import { createReactFlagSvgs } from 'svgReact/flags/createReactFlagSvgs';
import { downloadFlagsAWS } from 'svgReact/flags/downloadFlagsAWS';
import { removeAWSErrorSvgs } from 'svgReact/flags/removeAWSErrorSvgs';

export const generateSvgs = async () => {
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
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const createComponentsFromSvgs = async () => {
  try {
    /** @desc Create svgs react component from input svgs */
    createReactFlagSvgs({
      inputFolder: './svgReact/flags/svgs',
      outputFolder: './svgReact/flags/dist',
    });

    /** @desc Generate index file for generated svg react components */
    createIndexFile(`./svgReact/flags/dist`);

    // eslint-disable-next-line no-console
    console.log(`Formatting SVGs...`);
    /** @desc Format generated svg react component and new IconIndex */
    try {
      execSync(
        'pnpm eslint --fix svgReact/flags/dist --ext .ts,.tsx -c ./.eslintrc.prod.js',
        { encoding: 'utf8' },
      );
    } catch {
      /** @desc Run lint --fix the first time only fix part of the fixable erros, run it again to fix all */
      execSync(
        'pnpm eslint --fix svgReact/flags/dist --ext .ts,.tsx -c ./.eslintrc.prod.js',
        { encoding: 'utf8' },
      );
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

const run = async () => {
  await generateSvgs();
  await createComponentsFromSvgs();
};

run();
