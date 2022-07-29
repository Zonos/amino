import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

/**
 * Replace all values to turn constants to object with usable css variable
 * @example: 'space': '1.5rem' => 'space': 'var(--amino-space)'
 */
export const generateConstantContent = (content: string) => {
  return content.replace(
    /'?([a-zA-Z0-9-]+)'?:\s+'(.*)/gm,
    "'$1': 'var(--amino-$1)',"
  );
};

/**
 * Generate style constant files in destination
 * @param destinationPath Folder path where generated files would be located
 */
export const generateAminoConstants = async (destinationPath: string) => {
  /** Constant files located at 'build-utils/css/constants/*.ts */
  const constantList = [
    'colors',
    'layout',
    'radius',
    'spacing',
    'theme',
    'typography',
    'utils',
  ];
  const rootFolder = process.cwd();
  constantList.map(file => {
    const content = readFileSync(
      `${rootFolder}/build-utils/css/constants/${file}.ts`,
      {
        encoding: 'utf-8',
      }
    );

    const newContent = generateConstantContent(content);
    if (!existsSync(`${rootFolder}/${destinationPath}`)) {
      mkdirSync(`${rootFolder}/${destinationPath}`);
    }
    /** @desc write to destination */
    writeFileSync(`${rootFolder}/${destinationPath}/${file}.ts`, newContent);
    return null;
  });
};
