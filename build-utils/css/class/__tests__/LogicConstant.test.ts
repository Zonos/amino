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
