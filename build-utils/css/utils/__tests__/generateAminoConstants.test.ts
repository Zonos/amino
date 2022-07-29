import { readFileSync } from 'fs';

import { generateConstantContent } from '../generateAminoContants';

const spacingConstants = readFileSync(`build-utils/css/constants/spacing.ts`, {
  encoding: 'utf-8',
});

type UnitTestItem = {
  case: string;
  input: string;
};

const testCases: UnitTestItem[] = [
  {
    case: `Spacing constants`,
    input: spacingConstants.trim(),
  },
];

test.each(testCases)(`Case $case:`, ({ input }) =>
  expect(generateConstantContent(input)).toMatchInlineSnapshot(`
    "export const spaces = {
      /** @info px: 24px */
      'space': 'var(--amino-space)',
      /** @info px: -24px */
      'space-negative': 'var(--amino-space-negative)',
      /** @info px: 16px */
      'space-half': 'var(--amino-space-half)',
      /** @info px: -16px */
      'space-half-negative': 'var(--amino-space-half-negative)',
      /** @info px: 8px */
      'space-quarter': 'var(--amino-space-quarter)',
      /** @info px: -8px */
      'space-quarter-negative': 'var(--amino-space-quarter-negative)',
      /** @info px: 40px */
      'space-double': 'var(--amino-space-double)',
      /** @info px: -40px */
      'space-double-negative': 'var(--amino-space-double-negative)',
    } as const;"
  `)
);
