import path from 'path';

export type FileConfig = {
  /**
   * @desc Folder path destination for the file
   * @example src/icons
   * */
  destFolder: `src/icons${string}`;

  /**
   * @desc Input path that all generated file located
   * @example svgReact/icons/dist
   */
  inputFolderPath: string;
  /**
   * Static colors or not
   * @default false
   */
  keepColors?: boolean;
  /**
   * @desc original svg folder name
   */
  svgFolder: string;
  /** @desc Text on the top of index file to separate 2 contents */
  titleComment?: string;
};

export const svgProcessPaths: FileConfig[] = [
  {
    destFolder: 'src/icons',
    inputFolderPath: path.resolve(__dirname, 'svgReact/icons/dist'),
    svgFolder: 'svgs',
    titleComment: 'commonIcons',
  },
  {
    destFolder: 'src/icons/custom',
    inputFolderPath: 'svgReact/icons/dist/custom',
    svgFolder: 'custom-svgs',
    titleComment: 'customIcons',
  },
  {
    destFolder: 'src/icons/custom/products',
    inputFolderPath: 'svgReact/icons/dist/custom/products',
    keepColors: true,
    svgFolder: 'custom-svgs/products',
    titleComment: 'productIcons',
  },
];

export type GenerateIconType = {
  inputFolder: string;
  keepColors: boolean;
  /**
   * @description test
   * */
  names: SvgList[];
  outputFolder: FileConfig['inputFolderPath'];
};

export type SvgList = {
  componentName: string;
  /** New file name with extension .tsx */
  newFileName: `${string}.tsx`;
  originalFileName: string;
};

export type SvgGenerateType = Pick<
  (typeof svgProcessPaths)[number],
  'svgFolder' | 'inputFolderPath'
>;

export type GenerateIndexContentType = Pick<
  (typeof svgProcessPaths)[number],
  'inputFolderPath' | 'destFolder' | 'titleComment'
>;
