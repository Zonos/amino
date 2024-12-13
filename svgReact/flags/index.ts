import { execSync } from 'child_process';
import { optimizeSvgs } from 'svgReact/build-utils/optimizeSvgs';
import { copySmallerFlags } from 'svgReact/flags/copySmallerFlags';
import { createIndexFile } from 'svgReact/flags/createIndexFile';
import { createReactFlagSvgs } from 'svgReact/flags/createReactFlagSvgs';
import { downloadFlagsAWS } from 'svgReact/flags/downloadFlagsAWS';
import { removeAWSErrorSvgs } from 'svgReact/flags/removeAWSErrorSvgs';
import { createIndexKeyFile } from 'svgReact/icons/createIndexFile';

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
    createIndexKeyFile({
      generatePath: [
        {
          destFolder: 'src/icons/flags',
          inputFolderPath: './svgReact/flags/dist',
          titleComment: 'flagIcons',
        },
      ],
      target: 'src/icons/__stories__/FlagsList.ts',
    });

    console.info(`Formatting SVGs...`);
    /** @desc Format generated svg react component and new IconIndex */
    try {
      execSync(
        'pnpm eslint --fix svgReact/flags/dist -c ./eslint.config.prod.mjs',
        {
          encoding: 'utf8',
        },
      );
    } catch {
      /** @desc Run lint --fix the first time only fix part of the fixable errors, run it again to fix all */
      execSync(
        'pnpm eslint --fix svgReact/flags/dist -c ./eslint.config.prod.mjs',
        {
          encoding: 'utf8',
        },
      );
    }

    /** @desc Clean up all tsx/ts under flags folder (only file not folder) */
    execSync('rm -rf src/icons/flags/*.tsx src/icons/flags/*.ts', {
      encoding: 'utf-8',
    });

    console.info(`Moving output files to src...`);
    /** @desc Move file from distribution folder over */
    execSync('mv svgReact/flags/dist/* src/icons/flags', { encoding: 'utf-8' });

    console.info(`Linting all files...`);
    /** @desc Run autofix eslint */
    execSync('pnpm lint:prod --fix', { encoding: 'utf-8' });
  } catch (err) {
    console.error(err);
  }
};

const run = async () => {
  await generateSvgs();
  await createComponentsFromSvgs();
};

run();
