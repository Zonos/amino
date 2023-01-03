import { capitalize } from '../capitalize';

type UnitTest = {
  text: string;
  expected: string;
};

const testCases: UnitTest[] = [
  {
    text: 'Some thing',
    expected: 'Some Thing',
  },
  {
    text: 'SomeThing',
    expected: 'Something',
  },
  {
    text: 'Some_Thing',
    expected: 'Some_thing',
  },
];

test.each(testCases)('$text', ({ text, expected }) => {
  expect(capitalize(text)).toBe(expected);
});
