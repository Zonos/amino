import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

import { convertPascalCaseToCamelCase } from './convertPascalCaseToCamelCase';
import { extractColorFromSvgContent } from './generateColorConstantFromSvgs/extractColorFromSvgContent';
import {
  ColorDetail,
  generateFileContent,
} from './generateColorConstantFromSvgs/generateFileContent';
import { logging } from './logging';

const rootFolder = process.cwd();
const svgFolder = `${rootFolder}/build-utils/css/colorSvgs`;
const destinationFolder = `${rootFolder}/build-utils/css/constants/generated`;

type ColorObj = {
  [colorName: string]: ColorDetail[];
};

const getColorObj = () => {
  const colorFiles = glob.sync(`*.svg`, {
    cwd: svgFolder,
  });

  const colorObj: ColorObj = {};
  colorFiles
    /** Map and get basic info from the svgs */
    .map(file => {
      const fileName = file
        /** Remove extension */
        .replace('.svg', '');

      const content = readFileSync(
        `${svgFolder}/${fileName.replace('.svg', '')}.svg`,
        {
          encoding: 'utf-8',
        }
      );
      /** Get color code from the svg content */
      const color = extractColorFromSvgContent({
        content,
        fileName,
        svgFolder,
      });
      const matchedResult = fileName.matchAll(/([A-Za-z]+)(\d+)/g);
      return Array.from(matchedResult).map(([, colorName, intensity]) => ({
        colorName,
        intensity: Number(intensity),
        color,
      }))[0];
    })
    /** Order by intensity */
    .sort((a, b) => (a.intensity > b.intensity ? 1 : -1))
    /** Map, group color set and reformat the structure */
    .forEach(({ colorName, color, intensity }) => {
      colorObj[colorName] = colorObj[colorName] || [];
      colorObj[colorName].push({
        color,
        intensity,
      });
    });
  return colorObj;
};

/**
 * Generate color constants from svgs loaded from `colorSvgs` folder.
 * @svgFolder `build-utils/css/colorSvgs`
 * @destination `build-utils/css/constants/generated/colors`.
 * @namingConvention `_${colorCamelCased}.ts`
 */
export const generateColorConstantFromSvgs = async () => {
  const colorObj = getColorObj();

  await Promise.all(
    Object.keys(colorObj).map(async colorName => {
      const colorDetails = colorObj[colorName];
      const content = await generateFileContent({
        colorName,
        colorDetails,
      });
      return new Promise(resolve => {
        const colorsFolder = `${destinationFolder}/colors`;
        const fileName = `_${convertPascalCaseToCamelCase(colorName)}.ts`;

        if (!existsSync(colorsFolder)) {
          /** Create folder if it doesn't exist */
          mkdirSync(colorsFolder);
        }

        writeFileSync(`${colorsFolder}/${fileName}`, content);
        logging(
          `Done generating constant "${fileName}" for color set "${colorName}" (${colorDetails.length} colors)`
        );
        resolve(true);
      });
    })
  );
};
