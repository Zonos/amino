import { type FileConfig } from 'svgReact/icons/types/Config';

export type GenerateIconType = {
  inputFolder: string;
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
