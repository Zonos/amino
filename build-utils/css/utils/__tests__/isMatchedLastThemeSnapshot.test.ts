import { readFileSync } from 'fs';

import { darkStyleList } from '../../constants/_darkTheme';
import { theme as lightTheme } from '../../constants/theme';
import { isMatchedLastThemeSnapshot } from '../isMatchedLastThemeSnapshot';

// const lightThemeCSSSnapshot = readFileSync(
//   `build-utils/css/utils/__snapshots__/theme.css`,
//   {
//     encoding: 'utf-8',
//   }
// );
const lightThemeCSSSnapshot = readFileSync(
  `build-utils/css/utils/__snapshots__/theme.css`,
  {
    encoding: 'utf-8',
  }
);

const darkThemeCSSSnapshot = readFileSync(
  `build-utils/css/utils/__snapshots__/dark-theme.css`,
  {
    encoding: 'utf-8',
  }
);

type UnitTestItem = {
  case: string;
  theme: typeof lightTheme | typeof darkStyleList;
  input: string;
  expected: string[];
};

const testCases: UnitTestItem[] = [
  {
    case: `Match last light theme snapshot`,
    theme: lightTheme,
    input: lightThemeCSSSnapshot,
    expected: [],
  },
  {
    case: `Match last dark theme snapshot`,
    theme: darkStyleList,
    input: darkThemeCSSSnapshot,
    expected: [],
  },
  {
    case: `Missing one key from the theme constant`,
    theme: lightTheme,
    input: `
      --amino-type-scale-base: 16px;
      --amino-new-key: 2.125rem;
      --amino-font-size-2xl: 1.75rem; 
      --amino-font-size-xl: 1.375rem;
      --amino-font-size-l: 1.125rem;`,
    expected: ["Found variable '--amino-new-key' in last snapshot"],
  },
  {
    case: `Missing 3 keys from the theme constant`,
    theme: lightTheme,
    input: `
      --amino-type-scale-base: 16px;
      --amino-new-key: 2.125rem;
      --amino-font-size-2xl: 1.75rem; 
      --amino-new-key-2: 1.375rem;

      --amino-font-size-l: 1.125rem;
      --amino-new-key-3: 1.375rem;`,
    expected: [
      "Found variable '--amino-new-key' in last snapshot",
      "Found variable '--amino-new-key-2' in last snapshot",
      "Found variable '--amino-new-key-3' in last snapshot",
    ],
  },
  {
    case: `Key found but value is different`,
    theme: lightTheme,
    input: `
      --amino-type-scale-base: 16px;
      --amino-font-size-3xl: 2.100rem;
      --amino-font-size-2xl: 1.75rem; 
      --amino-font-size-xl: 1.375rem;
      --amino-font-size-l: 1.125rem;`,
    expected: [
      "'2.100rem' was value of key '--amino-font-size-3xl' in last snapshot. Received: '2.125rem'",
    ],
  },
  {
    case: `2 keys found but value is different`,
    theme: lightTheme,
    input: `
      --amino-type-scale-base: 16px;
      --amino-font-size-3xl: 2.100rem;
      --amino-font-size-2xl: 1.75rem; 
      --amino-font-size-xl: 1.300rem;
      --amino-font-size-l: 1.125rem;`,
    expected: [
      "'2.100rem' was value of key '--amino-font-size-3xl' in last snapshot. Received: '2.125rem'",
      "'1.300rem' was value of key '--amino-font-size-xl' in last snapshot. Received: '1.375rem'",
    ],
  },
  {
    case: `Mixes (value and key are different)`,
    theme: lightTheme,
    input: `
      --amino-type-scale-base: 16px;
      --amino-font-size-3xl: 2.100rem;
      --amino-brand-new-key: 1.75rem; 
      --amino-font-size-xl: 1.300rem;
      --amino-font-size-l: 1.125rem;`,
    expected: [
      "'2.100rem' was value of key '--amino-font-size-3xl' in last snapshot. Received: '2.125rem'",
      "Found variable '--amino-brand-new-key' in last snapshot",
      "'1.300rem' was value of key '--amino-font-size-xl' in last snapshot. Received: '1.375rem'",
    ],
  },
];

test.each(testCases)(`Case $case:`, ({ input, theme, expected }) =>
  expect(
    isMatchedLastThemeSnapshot({ theme, snapshotContent: input })
  ).toStrictEqual(expected)
);
