import type { ConstantCustomizedComment } from 'build-utils/css/constants/logic/types/LogicConstantType';
import { capitalize } from 'build-utils/css/utils/capitalize';
import { formatTS } from 'build-utils/css/utils/formatTS';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

type FileToParse = {
  /** @info file path to load (Need to be relative path - start from root of the project) */
  filePath: string;
};

type ParsedFile = FileToParse & {
  generateJsDocsFunction: ConstantCustomizedComment;
  hasJSDocsComment: boolean;
  keyValueParsed: Record<string, string> | null;
  rootFolder: string;
};

/**
 * Parse `ts` file from given path that has all the logic to generate key/value
 * and consume and generate constant
 */
export class LogicConstant {
  private parsedFile: ParsedFile;

  constructor() {
    const rootFolder = process.cwd();
    this.parsedFile = {
      filePath: '',
      generateJsDocsFunction: null,
      hasJSDocsComment: false,
      keyValueParsed: null,
      rootFolder,
    };
  }

  private printError(msg: string) {
    console.error(`File error '${__filename}': ${msg}`);
  }

  /**
   * Read and parse content from file to processable format
   * @param {FileToParse}
   */
  async parse({ filePath }: FileToParse): Promise<boolean> {
    this.parsedFile.filePath = filePath;
    if (filePath) {
      const parsedFileValid = this.checkValidParsedFile();
      if (!parsedFileValid) {
        this.printError(`Failed to parse file ${filePath}`);
      }
      return parsedFileValid;
    }
    this.printError('File path provided is invalid');
    return false;
  }

  private getFileName() {
    const { filePath } = this.parsedFile;
    return filePath.replace(/.+\/_?(.+)\.ts/gi, '$1');
  }

  /**
   * Check if file content satisfy naming rule for file before parsed or not
   */
  private async checkValidParsedFile(): Promise<boolean> {
    const { filePath, rootFolder } = this.parsedFile;
    /** Extract file name out of file path (without _) */
    const fileName = this.getFileName();
    const pascalFileName = capitalize(fileName);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const importResult: Record<string, any> = await import(
        `${rootFolder}/${filePath}`
      );

      /** Make sure function to generate content exist */
      const requiredGenerateContentFunction = `get${pascalFileName}ConstantKeyValuePairs`;
      if (!importResult[requiredGenerateContentFunction]) {
        throw Error(`${requiredGenerateContentFunction} function is required`);
      }

      this.parsedFile.keyValueParsed =
        importResult[requiredGenerateContentFunction]();

      /** Make sure function to generate JSDocs exist */
      const requiredGenerateCommentFunction = `get${pascalFileName}ConstantCustomizedComment`;

      if (!importResult[requiredGenerateCommentFunction]) {
        throw Error(`${requiredGenerateCommentFunction} function is required`);
      }
      this.parsedFile.generateJsDocsFunction =
        importResult[requiredGenerateCommentFunction];

      /** Make sure `hasJSDocsComment` exist */
      const requiredHasJSDocsFlag = `hasJSDocsComment`;
      if (importResult[requiredHasJSDocsFlag] === undefined) {
        throw Error(`'${requiredHasJSDocsFlag}' constant is required.`);
      }
      this.parsedFile.hasJSDocsComment = importResult[requiredHasJSDocsFlag];
    } catch (ex) {
      if (ex instanceof Error) {
        this.printError(ex.message);
        return false;
      }
    }
    return true;
  }

  generateConstantContent() {
    const { generateJsDocsFunction, hasJSDocsComment, keyValueParsed } =
      this.parsedFile;
    if (keyValueParsed) {
      const contents = Object.entries(keyValueParsed).map(([key, value]) =>
        [
          /** Add JSDocsComment by adding content get function `generateJsDocsFunction` on each loop */
          hasJSDocsComment && generateJsDocsFunction
            ? `/** ${generateJsDocsFunction({ key, value })} */`
            : '',
          `'${key}': '${value}',`,
        ]
          .filter(Boolean)
          .join('\n'),
      );
      return contents.join('\n');
    }
    return null;
  }

  async generateConstantFile() {
    const { rootFolder } = this.parsedFile;
    const constantContent = this.generateConstantContent();
    const fileName = this.getFileName();
    if (constantContent) {
      const fileContent = `
      export const ${fileName} = {
        ${constantContent}
      } as const;
    `;
      const formatedContent = await formatTS(fileContent);
      writeFileSync(
        `${rootFolder}/build-utils/css/constants/generated/_${fileName}.ts`,
        formatedContent,
      );
    }
  }

  /** Checking camel case for a text */
  static camelCaseChecking(text: string) {
    return !!text && /^[a-z]/.test(text) && !/[\W_]/.test(text);
  }

  /**
   *
   * @param fileName file name that would be generated.
   *
   * **Note**:
   * - Need to be camelCase
   * - No extension
   * @return
   * - `null` when fileName is invalid
   * - `string` when fileName is valid
   */
  static async _generateLogicConstFileContent(
    fileName: string,
  ): Promise<string> {
    if (!this.camelCaseChecking(fileName)) {
      throw Error(
        'File name needs to be in valid camelCase format with no extension and no underscore.',
      );
    }
    const rootFolder = process.cwd();
    /** Read the template content */
    const templateContent = readFileSync(
      path.resolve(
        `${rootFolder}/build-utils/css/class/template/logicConstant.tpl`,
      ),
      { encoding: 'utf-8' },
    );
    const newTemplateContent = templateContent
      .replace(/{{FileName}}/g, fileName)
      .replace(/{{CapitalizedFileName}}/g, capitalize(fileName));

    return formatTS(newTemplateContent);
  }

  /**
   *
   * @param fileName file name that would be generated.
   * File name:
   * - Need to be camelCase
   * - Have no extension
   * @note
   * - Generated file will be located at `build-utils/css/constants/logic` with file name `_${fileName}.ts`.
   * - It will do nothing if fileName is in wrong format has nothing
   */
  static async generateLogicConstantFile(fileName: string) {
    const fileContent = await this._generateLogicConstFileContent(fileName);
    const rootFolder = process.cwd();
    writeFileSync(
      `${rootFolder}/build-utils/css/constants/logic/_${fileName}.ts`,
      fileContent,
    );
  }

  /**
   *
   * @param content : file content that need to converted;
   * @returns
   */
  static async transformImportedConstant(content: string) {
    const matchedImportLines = content.matchAll(
      /import {\s+(\w+)\s+} from '(.+)';/gm,
    );
    const matchedArr = Array.from(matchedImportLines);

    /** Key value pair of extracted constants */
    const extractedConstants = matchedArr.map(([, variable, filePath]) => {
      const rootFolder = process.cwd();
      /** Read generated file content */
      const fileContent = readFileSync(
        path.resolve(`${rootFolder}/${filePath}.ts`),
        { encoding: 'utf-8' },
      );
      /** Extract only constant content */
      const matchAll = fileContent.matchAll(
        /(?<=.+ = {\n +)((\n|.)+)(?=}.+)/gm,
      );
      const matched = Array.from(matchAll);
      const result = matched
        .map(([extractedVariable]) => extractedVariable)
        .join('');
      return {
        data: result,
        key: variable,
      };
    });

    const result = content
      /** Clean up all imports */
      .replace(/import {\s+(\w+)\s+} from '(.+)';/gm, '')
      /** Replace spread constant in theme constant with extracted constant from generated constant file */
      .replace(
        /\.\.\.(\w+),/gm,
        (_g0, variable) =>
          extractedConstants.find(item => item.key === variable)?.data || _g0,
      );
    return formatTS(result);
  }
}
