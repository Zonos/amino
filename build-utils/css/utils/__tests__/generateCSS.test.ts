import { readFileSync } from 'fs';

import { darkStyleList } from '../../constants/_darkTheme';
import { theme } from '../../constants/theme';
import { generateLightThemeContent } from '../generateCSS';

type UnitTestItem = {
  testCase: string;
  input: Record<string, string>;
  expected: string;
};

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

const testCases: UnitTestItem[] = [
  {
    testCase: `light theme`,
    input: theme,
    expected: lightThemeCSSSnapshot,
  },
  {
    testCase: `dark`,
    input: darkStyleList,
    expected: darkThemeCSSSnapshot,
  },
];

test.each(testCases)(`Case $case:`, async ({ testCase, input }) => {
  const result = await generateLightThemeContent(input);
  expect(result).toMatchSnapshot(testCase);
});
