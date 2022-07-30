import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { format, resolveConfig, resolveConfigFile } from 'prettier';

/**
 * Format css file using prettier api
 * @param content File content to format
 * */
export const formatTS = async (content: string) => {
  const configFile = await resolveConfigFile();
  const options = (await resolveConfig(configFile || '')) || {};
  return format(content, {
    ...options,
    parser: 'typescript',
  });
};

/**
 * Replace all values to turn constants to object with usable css variable
 * @example: 'space': '1.5rem' => 'space': 'var(--amino-space)'
 */
export const generateConstantContent = (content: string) => {
  return content.replace(
    /'?([a-zA-Z0-9-]+)'?:\s+['`](.*)/gm,
    "'$1': 'var(--amino-$1)',"
  );
};

/**
 * Generate style constant files in destination
 * @param destinationPath Folder path where generated files would be located
 */
export const generateAminoConstants = async (destinationPath: string) => {
  const rootFolder = process.cwd();
  const content = readFileSync(
    `${rootFolder}/build-utils/css/constants/theme.ts`,
    {
      encoding: 'utf-8',
    }
  );

  const newContent = generateConstantContent(content);
  /** @desc format file with TScript formater */
  const formatedContent = await formatTS(newContent);
  if (!existsSync(`${rootFolder}/${destinationPath}`)) {
    mkdirSync(`${rootFolder}/${destinationPath}`);
  }
  /** @desc write to destination */
  writeFileSync(`${rootFolder}/${destinationPath}/theme.ts`, formatedContent);
};
