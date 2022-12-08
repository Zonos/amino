import { convertPascalCaseToCamelCase } from '../convertPascalCaseToCamelCase';

type UnitTest = {
  text: string;
  expected: string;
};
const testCases: UnitTest[] = [
  {
    text: 'TestCase',
    expected: 'testCase',
  },
  {
    text: 'TestCase300',
    expected: 'testCase300',
  },
];

describe('Make sure convertPascalCaseToCamelCase work properly', () => {
  test.each(testCases)('text "$text": "$expected"', ({ text, expected }) => {
    expect(convertPascalCaseToCamelCase(text)).toBe(expected);
  });
});
