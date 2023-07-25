import { type FileConfig } from 'svgReact/icons/types/Config';

export const svgProcessPaths: FileConfig[] = [
  {
    destFolder: 'src/icons',
    inputFolderPath: 'svgReact/icons/dist',
    svgFolder: 'svgs',
    titleComment: 'Common',
  },
  {
    destFolder: 'src/icons/custom',
    inputFolderPath: 'svgReact/icons/dist/custom',
    svgFolder: 'custom-svgs',
    titleComment: 'Custom',
  },
];

export type SvgGenerateType = Pick<
  (typeof svgProcessPaths)[number],
  'svgFolder' | 'inputFolderPath'
>;

export type GenerateIndexContentType = Pick<
  (typeof svgProcessPaths)[number],
  'inputFolderPath' | 'destFolder' | 'titleComment'
>;
