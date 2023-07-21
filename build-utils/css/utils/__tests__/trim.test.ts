import { trim } from 'build-utils/css/utils/trim';

type UnitTestItem = {
  case: string;
  expected: string;
  input: string;
};

const testCases: UnitTestItem[] = [
  {
    case: `"\\n" character`,
    expected: `--amino-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',`,
    input: ` --amino-font-sans: 'Inter', -apple-system, 
    
    BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',`,
  },
  {
    case: `Multiple spaces`,
    expected: `--amino-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',`,
    input: `              --amino-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',   `,
  },
];

test.each(testCases)(
  `Case $case: $expected is expected when input is: $input`,
  ({ expected, input }) => expect(trim(input)).toBe(expected),
);
