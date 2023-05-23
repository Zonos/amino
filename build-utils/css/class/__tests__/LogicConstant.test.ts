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
