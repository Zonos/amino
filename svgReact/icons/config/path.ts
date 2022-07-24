import { FileConfig } from '../types/Config';

const figmaSvgPath: FileConfig = {
  titleComment: 'Common',
  svgFolder: 'svgs',
  inputFolderPath: 'svgReact/icons/dist',
  destFolder: 'src/icons',
};

const customSvgPath: FileConfig = {
  titleComment: 'Custom',
  svgFolder: 'custom-svgs',
  inputFolderPath: 'svgReact/icons/dist/custom',
  destFolder: 'src/icons/custom',
};

export const svgProcessPaths = [figmaSvgPath, customSvgPath];

export type SvgGenerateType = Pick<
  typeof svgProcessPaths[number],
  'svgFolder' | 'inputFolderPath'
>;

export type GenerateIndexContentType = Pick<
  typeof svgProcessPaths[number],
  'inputFolderPath' | 'destFolder' | 'titleComment'
>;
