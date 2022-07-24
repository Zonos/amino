import { FileConfig } from '../types/Config';

export const svgProcessPaths: FileConfig[] = [
  {
    titleComment: 'Common',
    svgFolder: 'svgs',
    inputFolderPath: 'svgReact/icons/dist',
    destFolder: 'src/icons',
  },
  {
    titleComment: 'Custom',
    svgFolder: 'custom-svgs',
    inputFolderPath: 'svgReact/icons/dist/custom',
    destFolder: 'src/icons/custom',
  },
];

export type SvgGenerateType = Pick<
  typeof svgProcessPaths[number],
  'svgFolder' | 'inputFolderPath'
>;

export type GenerateIndexContentType = Pick<
  typeof svgProcessPaths[number],
  'inputFolderPath' | 'destFolder' | 'titleComment'
>;
