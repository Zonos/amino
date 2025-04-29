import { convertPascalCaseToCamelCase } from 'build-utils/css/utils/convertPascalCaseToCamelCase';

type UnitTest = {
  expected: string;
  text: string;
};
const testCases: UnitTest[] = [
  {
    expected: 'testCase',
    text: 'TestCase',
  },
  {
    expected: 'testCase300',
    text: 'TestCase300',
  },
];

describe('Make sure convertPascalCaseToCamelCase work properly', () => {
  test.each(testCases)('text "$text": "$expected"', ({ expected, text }) => {
    expect(convertPascalCaseToCamelCase(text)).toBe(expected);
  });
});
