import { execSync } from 'child_process';
import { glob } from 'glob';

import { optimizeSvgs } from '../build-utils/optimizeSvgs';
import { SvgGenerateType, svgProcessPaths } from './config/path';
import { createIndexFile } from './createIndexFile';
import { createReactIconSVGs } from './createReactIconSVGs';
import { SvgList } from './types/TypeGenerateIcon';

const pascalCased = (string: string) => {
  return (
    string
      /** @desc Uppercase first character */
      .replace(/(\s|-)+[a-z]/g, word => word.toUpperCase())
      /** @desc Remove spaces and - */
      .replace(/\s|-/g, '')
      /** @desc Adding suffix Icon to file name */
      .replace(/\.svg/, 'Icon.svg')
  );
};

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

/** @desc Clean up distribution folder */
execSync('rm -rf svgReact/icons/dist', { encoding: 'utf-8' });

/** @desc Generte all svg components base on path configuration */
svgProcessPaths.map(generateSvgs);

/** @desc Generate index file for generated svg react components */
createIndexFile({
  generatePath: [
    ...svgProcessPaths,
    {
      titleComment: 'Legacy',
      inputFolderPath: 'src/icons/legacy',
      destFolder: 'src/icons/legacy',
    },
  ],
  target: 'svgReact/icons/dist',
});

/** @desc Format generated svg react component and new IconIndex */
execSync('yarn svgs:format', { encoding: 'utf8' });

svgProcessPaths.map(({ inputFolderPath, destFolder }) => {
  /** @desc Clean up all tsx/ts under icons folder (only file not folder) */
  execSync(`rm -rf ${destFolder}/*.tsx ${destFolder}/*.ts`, {
    encoding: 'utf-8',
  });

  /** @desc Move file from distribution folder over */
  execSync(`mv ${inputFolderPath}/*.ts* ${destFolder}`, { encoding: 'utf-8' });

  /** @desc Run autofix eslint */
  execSync('yarn lint:prod --fix', { encoding: 'utf-8' });

  return null;
});
