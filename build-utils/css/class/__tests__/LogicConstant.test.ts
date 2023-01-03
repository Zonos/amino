import { existsSync, unlinkSync } from 'fs';

import { LogicConstant } from '../LogicConstant';

describe('Make sure transformLogicConstant in LogicConstant work properly', () => {
  type UnitTest = {
    case: string;
    content: string;
  };
  const testCases: UnitTest[] = [
    {
      case: 'Has 1 import',
      content: `
import { example1 } from '../class/__mocks__/transformLogicConstant-example_1';

export const test = {
  ...example1,
} as const;
            `,
    },
    {
      case: 'Has 2 imports',
      content: `
import { example1 } from '../class/__mocks__/transformLogicConstant-example_1';
import { example2 } from '../class/__mocks__/transformLogicConstant-example_2';

export const test = {
  ...example1,

  /** Example 2 */
  ...example2,
} as const;
            `,
    },
  ];
  test.each(testCases)(`Case: '$case'`, async ({ case: _case, content }) => {
    const result = await LogicConstant.transformImportedConstant(content);
    expect(result).toMatchSnapshot(_case);
  });
});

describe('Make sure `camelCaseChecking` in LogicConstant work properly', () => {
  type UnitTest = {
    text: string;
    expected: boolean;
  };
  const testCases: UnitTest[] = [
    {
      text: '',
      expected: false,
    },
    {
      text: 'PasCalCase',
      expected: false,
    },
    {
      text: 'camelCase',
      expected: true,
    },
    {
      text: 'camelcase',
      expected: true,
    },
    {
      text: 'camelCaseWithNumber123',
      expected: true,
    },
    {
      text: 'just_SnakeCase',
      expected: false,
    },
    {
      text: 'Mix_SnakeCase_And_PasCal',
      expected: false,
    },
    {
      text: '123camelCaseWithNumber',
      expected: false,
    },
    {
      text: 'camelCaseWithNumber123',
      expected: true,
    },
    {
      text: 'sp3c1alCh@r@ct3rCame',
      expected: false,
    },
  ];
  test.each(testCases)(
    `text: $text - expected: $expected`,
    async ({ text, expected }) => {
      const result = LogicConstant.camelCaseChecking(text);
      expect(result).toBe(expected);
    }
  );
});

describe('Make sure `generateLogicConstFileContent` in LogicConstant work properly', () => {
  test(`Generated template content match snapshot`, async () => {
    const result = await LogicConstant._generateLogicConstFileContent('space');
    expect(result).toMatchSnapshot();
  });

  test(`Passing empty file name to the function`, async () => {
    try {
      await LogicConstant._generateLogicConstFileContent('');
    } catch (err) {
      if (err instanceof Error) {
        expect(err.message).toBe(
          'File name needs to be in valid camelCase format with no extension and no underscore.'
        );
      }
    }
  });
});

describe('Make sure `generateLogicConstFile` in LogicConstant work properly', () => {
  const rootFolder = process.cwd();
  const fileName = 'testSpaceSnapshot';
  const filePath = `${rootFolder}/build-utils/css/constants/logics/_${fileName}.ts`;

  afterEach(() => {
    // clean up the file after generating it
    if (existsSync(filePath)) {
      unlinkSync(filePath);
    }
  });
  test(`New file generated at 'build-utils/css/logics'`, async () => {
    await LogicConstant.generateLogicConstantFile(fileName);
    const exist = existsSync(filePath);
    expect(exist).toBe(true);
  });
  test(`Passing empty file name to the function`, async () => {
    try {
      await LogicConstant.generateLogicConstantFile('');
    } catch (err) {
      if (err instanceof Error) {
        expect(err.message).toBe(
          'File name needs to be in valid camelCase format with no extension and no underscore.'
        );
      }
    }
  });
  test(`Passing invalid file name to the function`, async () => {
    try {
      await LogicConstant.generateLogicConstantFile('__invalidFileName');
    } catch (err) {
      if (err instanceof Error) {
        expect(err.message).toBe(
          'File name needs to be in valid camelCase format with no extension and no underscore.'
        );
      }
    }
  });
});
