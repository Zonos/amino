import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { optimize } from 'svgo';

export const optimizeSvgs = ({
  folderPath,
}: {
  /** @desc Input full folder path that need to be glob and optimized */
  folderPath: string;
}) => {
  glob.sync(folderPath).forEach(item => {
    const optimizedSvg = optimize(readFileSync(item, { encoding: 'utf-8' }), {
      multipass: true,
      path: item,

      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    });
    if (optimizedSvg.data) {
      writeFileSync(item, optimizedSvg.data, { encoding: 'utf-8' });
    }
  });
};
