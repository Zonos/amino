import { execSync } from 'child_process';

import { optimizeSvgs } from '../build-utils/optimizeSvgs';
import { copySmallerFlags } from './copySmallerFlags';
import { downloadFlagsAWS } from './downloadFlagsAWS';
import { removeAWSErrorSvgs } from './removeAWSErrorSvgs';

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
