import { convertToKebabCase } from 'build-utils/css/utils/convertToKebabCase';

type UnitTest = {
  expected: string;
  text: string;
};
const testCases: UnitTest[] = [
  {
    expected: 'test-case',
    text: 'testCase',
  },
  {
    expected: 'all-cap',
    text: 'AllCap',
  },
];

describe('Make sure convertToKebabCase work properly', () => {
  test.each(testCases)('text "$text": "$expected"', ({ expected, text }) => {
    expect(convertToKebabCase(text)).toBe(expected);
  });
});
