import { type night } from 'build-utils/css/constants/_night';
import { theme as lightTheme } from 'build-utils/css/constants/theme';
import { isMatchedLastThemeSnapshot } from 'build-utils/css/utils/isMatchedLastThemeSnapshot';

type UnitTestItem = {
  case: string;
  expected: string[];
  input: string;
  theme: typeof lightTheme | typeof night;
};

const testCases: UnitTestItem[] = [
  {
    case: `Missing one key from the theme constant`,
    expected: ["Found variable '--amino-new-key' in last snapshot"],
    input: `
      --amino-type-scale-base: 16px;
      --amino-new-key: 2.125rem;
      --amino-font-size-2xl: 1.75rem;
      --amino-font-size-xl: 1.375rem;
      --amino-font-size-l: 1.125rem;`,
    theme: lightTheme,
  },
  {
    case: `Missing 3 keys from the theme constant`,
    expected: [
      "Found variable '--amino-new-key' in last snapshot",
      "Found variable '--amino-new-key-2' in last snapshot",
      "Found variable '--amino-new-key-3' in last snapshot",
    ],
    input: `
      --amino-type-scale-base: 16px;
      --amino-new-key: 2.125rem;
      --amino-font-size-2xl: 1.75rem;
      --amino-new-key-2: 1.375rem;

      --amino-font-size-l: 1.125rem;
      --amino-new-key-3: 1.375rem;`,
    theme: lightTheme,
  },
  {
    case: `Key found but value is different`,
    expected: [
      "'2.100rem' was value of key '--amino-font-size-3xl' in last snapshot. Received: '2.125rem'",
    ],
    input: `
      --amino-type-scale-base: 16px;
      --amino-font-size-3xl: 2.100rem;
      --amino-font-size-2xl: 1.75rem;
      --amino-font-size-xl: 1.375rem;
      --amino-font-size-l: 1.125rem;`,
    theme: lightTheme,
  },
  {
    case: `2 keys found but value is different`,
    expected: [
      "'2.100rem' was value of key '--amino-font-size-3xl' in last snapshot. Received: '2.125rem'",
      "'1.300rem' was value of key '--amino-font-size-xl' in last snapshot. Received: '1.375rem'",
    ],
    input: `
      --amino-type-scale-base: 16px;
      --amino-font-size-3xl: 2.100rem;
      --amino-font-size-2xl: 1.75rem;
      --amino-font-size-xl: 1.300rem;
      --amino-font-size-l: 1.125rem;`,
    theme: lightTheme,
  },
  {
    case: `Mixes (value and key are different)`,
    expected: [
      "'2.100rem' was value of key '--amino-font-size-3xl' in last snapshot. Received: '2.125rem'",
      "Found variable '--amino-brand-new-key' in last snapshot",
      "'1.300rem' was value of key '--amino-font-size-xl' in last snapshot. Received: '1.375rem'",
    ],
    input: `
      --amino-type-scale-base: 16px;
      --amino-font-size-3xl: 2.100rem;
      --amino-brand-new-key: 1.75rem;
      --amino-font-size-xl: 1.300rem;
      --amino-font-size-l: 1.125rem;`,
    theme: lightTheme,
  },
];

test.each(testCases)(`Case $case:`, ({ expected, input, theme }) =>
  expect(
    isMatchedLastThemeSnapshot({ snapshotContent: input, theme }),
  ).toStrictEqual(expected),
);
