import { capitalize } from 'build-utils/css/utils/capitalize';

type UnitTest = {
  expected: string;
  text: string;
};

const testCases: UnitTest[] = [
  {
    expected: 'Some Thing',
    text: 'Some thing',
  },
  {
    expected: 'Something',
    text: 'SomeThing',
  },
  {
    expected: 'Some_thing',
    text: 'Some_Thing',
  },
];

test.each(testCases)('$text', ({ expected, text }) => {
  expect(capitalize(text)).toBe(expected);
});
