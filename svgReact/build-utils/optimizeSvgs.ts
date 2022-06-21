import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { optimize, OptimizedSvg } from 'svgo';

export const optimizeSvgs = ({
  folderPath,
}: {
  /** @desc Input full folder path that need to be glob and optimized */
  folderPath: string;
}) => {
  glob.sync(folderPath).forEach(item => {
    // eslint-disable-next-line no-console
    console.log(`Optimizing ${item} `);
    const optimizedSvg = optimize(readFileSync(item, { encoding: 'utf-8' }), {
      path: item,
      multipass: true,

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
    }) as OptimizedSvg;
    if (optimizedSvg.data) {
      writeFileSync(item, optimizedSvg.data, { encoding: 'utf-8' });
    }
  });
};
