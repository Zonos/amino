import { LogicConstant } from '../../../class/LogicConstant';
import {
  getSpaceConstantCustomizedComment,
  getSpaceConstantKeyValuePairs,
} from '../_space';
import { KeyValuePairType } from '../types/LogicConstantType';

describe('Make sure logic to generate `space` work as expected', () => {
  test('Key value pairs return correctly', () => {
    expect(getSpaceConstantKeyValuePairs()).toMatchSnapshot();
  });
});

describe('Make sure logic of generating jsdocs comment work as expected', () => {
  type UnitTest = {
    input: KeyValuePairType;
    expected: string;
  };
  const testCases: UnitTest[] = [
    {
      input: {
        key: 'space-24',
        value: '1.5rem',
      },
      expected: '@info space-24: 1.5rem (24px)',
    },
    {
      input: {
        key: 'space-0',
        value: '0',
      },
      expected: '@info space-0: 0 (0)',
    },
    {
      input: {
        key: 'space-negative-4',
        value: '-0.25rem',
      },
      expected: '@info space-negative-4: -0.25rem (-4px)',
    },
  ];
  test.each(testCases)(
    'Make sure space constant comment works as expected',
    ({ input: { key, value }, expected }) => {
      if (getSpaceConstantCustomizedComment) {
        const result = getSpaceConstantCustomizedComment({ key, value });
        expect(result).toBe(expected);
      }
    }
  );
});

describe('Make sure constant content are generated correctly', () => {
  test('`generateConstantContent` function return correctly', async () => {
    const logic = new LogicConstant();
    await logic.parse({
      filePath: 'build-utils/css/constants/logics/_space.ts',
    });

    expect(logic.generateConstantContent()).toMatchSnapshot();
  });
});
