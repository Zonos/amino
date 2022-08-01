import { trim } from '../trim';

type UnitTestItem = {
  case: string;
  input: string;
  expected: string;
};

const testCases: UnitTestItem[] = [
  {
    case: `"\\n" character`,
    input: ` --amino-font-sans: 'Inter', -apple-system, 
    
    BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',`,
    expected: `--amino-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',`,
  },
  {
    case: `Multiple spaces`,
    input: `              --amino-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',   `,
    expected: `--amino-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',`,
  },
];

test.each(testCases)(
  `Case $case: $expected is expected when input is: $input`,
  ({ input, expected }) => expect(trim(input)).toBe(expected)
);
