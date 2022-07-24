export type FileConfig = {
  /**
   * @desc original svg folder name
   */
  svgFolder: string;

  /**
   * @desc Folder path destination for the file
   * @example src/icons
   * */
  destFolder: `src/icons${string}`;
  /**
   * @desc Input path that all generated file located
   * @example svgReact/icons/dist
   */
  inputFolderPath: `svgReact/icons${string}` | `src/icons${string}`;
  /** @desc Text on the top of index file to separate 2 contents */
  titleComment?: string;
};
