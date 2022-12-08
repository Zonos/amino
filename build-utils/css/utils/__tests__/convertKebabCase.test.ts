import { convertToKebabCase } from '../convertToKebabCase';

type UnitTest = {
  text: string;
  expected: string;
};
const testCases: UnitTest[] = [
  {
    text: 'testCase',
    expected: 'test-case',
  },
  {
    text: 'AllCap',
    expected: 'all-cap',
  },
];

describe('Make sure convertToKebabCase work properly', () => {
  test.each(testCases)('text "$text": "$expected"', ({ text, expected }) => {
    expect(convertToKebabCase(text)).toBe(expected);
  });
});
