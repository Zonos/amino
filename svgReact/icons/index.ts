import { execSync } from 'child_process';
import { glob } from 'glob';
import { optimizeSvgs } from 'svgReact/build-utils/optimizeSvgs';
import {
  type FileConfig,
  type SvgList,
  svgProcessPaths,
} from 'svgReact/icons/config/config';
import { createIndexFile } from 'svgReact/icons/createIndexFile';
import { createReactIconSVGs } from 'svgReact/icons/createReactIconSvgs';

const pascalCased = (string: string) =>
  string
    /** @desc Uppercase first character */
    .replace(/(\s|-)+[a-z]/g, word => word.toUpperCase())
    /** @desc Remove spaces and - */
    .replace(/\s|-/g, '')
    /** @desc Adding suffix Icon to file name */
    .replace(/\.svg/, 'Icon.svg');

const generateSvgs = ({
  inputFolderPath,
  keepColors = false,
  svgFolder,
}: FileConfig) => {
  const names: SvgList[] = glob
    .sync(`${__dirname}/${svgFolder}/**/*.svg`)
    /** @desc Filter and return only list of `${folder}/${filename}` or `${filename}` */
    .map(item => item.replace(`${__dirname}/${svgFolder}/`, ''))
    .filter(Boolean)
    /** @desc Preprocessing file */
    .map(item => {
      const hasSubfolder = item.split('/').length > 1;
      // if has sub folder, process with sub folder
      if (hasSubfolder) {
        const [folderName, type] = item.split('/');
        const svgType = keepColors ? 'Color.svg' : type;
        const fileName = pascalCased(
          `${folderName}${svgType!.replace(/(Line|Black)\.svg/, '.svg')}`,
        );

        return {
          componentName: fileName.replace('.svg', ''),
          newFileName: fileName.replace(
            '.svg',
            '.tsx',
          ) as SvgList['newFileName'],
          originalFileName: item,
        };
      }

      const [file] = item.split('/');
      const fileName = pascalCased(`${file}`);
      return {
        componentName: fileName.replace('.svg', ''),
        newFileName: fileName.replace('.svg', '.tsx') as SvgList['newFileName'],
        originalFileName: item,
      };
    })
    .filter(Boolean);

  if (names.length > 0) {
    try {
      /** @desc Optimize svg */
      optimizeSvgs({ folderPath: `${__dirname}/${svgFolder}/**/*.svg` });

      console.info(`Generating react component for folder "${svgFolder}"`);
      /** @desc Generate svg react component */
      createReactIconSVGs({
        inputFolder: `svgReact/icons/${svgFolder}`,
        keepColors,
        names,
        outputFolder: inputFolderPath,
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.info('No svg found!');
  }
};

console.info('Cleaning up distribution folder ...');
/** @desc Clean up distribution folder */
execSync('rm -rf svgReact/icons/dist', { encoding: 'utf-8' });

/** @desc Generte all svg components base on path configuration */
svgProcessPaths.map(generateSvgs);

console.info('Generating index file for generated svg react components ...');
/** @desc Generate index file for generated svg react components */
createIndexFile({
  generatePath: [...svgProcessPaths],
  target: 'svgReact/icons/dist',
});

/** @desc Format generated svg react component and new IconIndex */
console.info('Linting ...');
execSync(
  'pnpm eslint --fix svgReact/icons/dist --ext .ts,.tsx -c ./.eslintrc.prod.js',
  {
    encoding: 'utf8',
  },
);

svgProcessPaths.forEach(({ destFolder, inputFolderPath }) => {
  {
    const cmd = `rm -rf ${destFolder}/*.tsx ${destFolder}/*.ts`;
    console.info(cmd);
    /** @desc Clean up all tsx/ts under icons folder (only file not folder) */
    execSync(cmd, {
      encoding: 'utf-8',
    });
  }

  {
    const cmd = `mv ${inputFolderPath}/*.ts* ${destFolder}`;
    console.info(cmd);
    /** @desc Move file from distribution folder over */
    execSync(cmd, {
      encoding: 'utf-8',
    });
  }
});
