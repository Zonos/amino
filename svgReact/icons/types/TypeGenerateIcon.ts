import { FileConfig } from './Config';

export type GenerateIconType = {
  /**
   * @description test
   * */
  names: SvgList[];
  inputFolder: string;
  outputFolder: FileConfig['inputFolderPath'];
};

export type SvgList = {
  originalFileName: string;
  /** New file name with extension .tsx */
  newFileName: `${string}.tsx`;
  componentName: string;
};
