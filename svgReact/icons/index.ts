import { execSync } from 'child_process';
import { glob } from 'glob';

import { optimizeSvgs } from '../build-utils/optimizeSvgs';
import { SvgGenerateType, svgProcessPaths } from './config/path';
import { createIndexFile } from './createIndexFile';
import { createReactIconSVGs } from './createReactIconSVGs';
import { SvgList } from './types/TypeGenerateIcon';

const log = (msg: string) => {
  // eslint-disable-next-line no-console
  console.log(msg);
};

const pascalCased = (string: string) =>
  string
    /** @desc Uppercase first character */
    .replace(/(\s|-)+[a-z]/g, word => word.toUpperCase())
    /** @desc Remove spaces and - */
    .replace(/\s|-/g, '')
    /** @desc Adding suffix Icon to file name */
    .replace(/\.svg/, 'Icon.svg');

const generateSvgs = ({ svgFolder, inputFolderPath }: SvgGenerateType) => {
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
        const fileName = pascalCased(
          `${folderName}${type.replace(/(Line|Black)\.svg/, '.svg')}`
        );
        return {
          originalFileName: item,
          newFileName: fileName.replace(
            '.svg',
            '.tsx'
          ) as SvgList['newFileName'],
          componentName: fileName.replace('.svg', ''),
        };
      }

      const [file] = item.split('/');
      const fileName = pascalCased(`${file}`);
      return {
        originalFileName: item,
        newFileName: fileName.replace('.svg', '.tsx') as SvgList['newFileName'],
        componentName: fileName.replace('.svg', ''),
      };
    })
    .filter(Boolean);

  if (names.length > 0) {
    try {
      /** @desc Optimize svg */
      optimizeSvgs({ folderPath: `${__dirname}/${svgFolder}/**/*.svg` });

      log(`Generating react component for folder "${svgFolder}"`);
      /** @desc Generate svg react component */
      createReactIconSVGs({
        names,
        inputFolder: `svgReact/icons/${svgFolder}`,
        outputFolder: inputFolderPath,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('No svg found!');
  }
};

log('Cleaning up distribution folder ...');
/** @desc Clean up distribution folder */
execSync('rm -rf svgReact/icons/dist', { encoding: 'utf-8' });

/** @desc Generte all svg components base on path configuration */
svgProcessPaths.map(generateSvgs);

log('Generating index file for generated svg react components ...');
/** @desc Generate index file for generated svg react components */
createIndexFile({
  generatePath: [...svgProcessPaths],
  target: 'svgReact/icons/dist',
});

/** @desc Format generated svg react component and new IconIndex */
execSync('pnpm svgs:format', { encoding: 'utf8' });

svgProcessPaths.forEach(({ inputFolderPath, destFolder }) => {
  log(`Cleaning up folder "${destFolder}" ...`);
  /** @desc Clean up all tsx/ts under icons folder (only file not folder) */
  execSync(`rm -rf ${destFolder}/*.tsx ${destFolder}/*.ts`, {
    encoding: 'utf-8',
  });

  log(`Moving files from "${inputFolderPath}" to "${destFolder}"`);
  /** @desc Move file from distribution folder over */
  execSync(`mv ${inputFolderPath}/*.ts* ${destFolder}`, {
    encoding: 'utf-8',
  });
});

log('Linting ...');
/** @desc Run autofix eslint */
execSync('pnpm lint:prod --fix', { encoding: 'utf-8' });
