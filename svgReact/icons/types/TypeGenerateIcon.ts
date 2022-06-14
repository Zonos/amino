export type GenerateIconType = {
  /**
   * @description test
   * */
  names: SvgList[];
  inputFolder: string;
  outputFolder: string;
};

export type SvgList = {
  originalFileName: string;
  /** New file name with extension .tsx */
  newFileName: string;
  componentName: string;
};
