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
 * Replace all values, turn constants to object with usable css variable (with jsdocs)
 * @example: 'space': '1.5rem' => 'space': 'var(--amino-space)'
 */
export const generateConstantContent = async (content: string) => {
  const result = content
    /** @desc find and replace all key value pairs that have jsdocs comment above */
    .replace(
      /(?<=\/\*\*.*\/)(\n\s*)'?([a-zA-Z0-9-]+)'?:\s+['`](.*)['`],*/gm,
      "$1'$2': 'var(--amino-$2)',"
    )
    /**
     * @desc find and replace all key value pairs that don't have jsdocs comment above
     * and add '@info $value' jsdocs comment above it
     */
    .replace(
      /(?<!\/\*\*.*\/)(\n\s*)'?([a-zA-Z0-9-]+)'?:\s+['`](.*)['`],*/gm,
      "$1/* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */\n/** @info $3 */\n'$2': 'var(--amino-$2)',"
    );

  /** @desc format file with TScript formater */
  const formatedResult = await formatTS(result);
  return formatedResult;
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

  const formatedContent = await generateConstantContent(content);
  if (!existsSync(`${rootFolder}/${destinationPath}`)) {
    mkdirSync(`${rootFolder}/${destinationPath}`);
  }
  /** @desc write to destination */
  writeFileSync(`${rootFolder}/${destinationPath}/theme.ts`, formatedContent);
};
