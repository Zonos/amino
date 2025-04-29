import { LogicConstant } from 'build-utils/css/class/LogicConstant';
import { formatTS } from 'build-utils/css/utils/formatTS';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

/**
 * Replace all values, turn constants to object with usable css variable (with jsdocs)
 * @example: 'space': '1.5rem' => 'space': 'var(--amino-space)'
 */
export const generateConstantContent = async (content: string) => {
  /** Transform the content to typescript JSDocs friendly */
  const logicTransformedContent =
    await LogicConstant.transformImportedConstant(content);

  const result = logicTransformedContent
    /** @desc find and replace all key value pairs that have jsdocs comment above */
    .replace(
      /(?<=\/\*\*.*\/)(\n\s*)'?([a-zA-Z0-9-]+)'?:\s+['`](.*)['`],*/gm,
      "$1'$2': 'var(--amino-$2)',",
    )
    /**
     * @desc find and replace all key value pairs that don't have jsdocs comment above
     * and add '@info $value' jsdocs comment above it
     */
    .replace(
      /(?<!\/\*\*.*\/)(\n\s*)'?([a-zA-Z0-9-]+)'?:\s+['`](.*)['`],*/gm,
      "$1/** @info $3 */\n'$2': 'var(--amino-$2)',",
    )
    /**
     * @desc find and add Warning comment into all key value pairs
     */
    .replace(
      /(?<=\/\*\*.*\/)(\n\s*)('?[a-zA-Z0-9-]+'?:.+,*)/gm,
      "$1/* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */\n$2",
    )
    /**
     * @desc convert key to camel case
     */
    .replace(/'\w+(-\w+)+':/gm, str =>
      str.replace(/-(\w)/gm, (_, letter) => letter.toUpperCase()),
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
    },
  );

  const formatedContent = await generateConstantContent(content);
  if (!existsSync(`${rootFolder}/${destinationPath}`)) {
    mkdirSync(`${rootFolder}/${destinationPath}`);
  }
  /** @desc write to destination */
  writeFileSync(`${rootFolder}/${destinationPath}/theme.ts`, formatedContent);
};
