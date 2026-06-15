import { getMatchedAminoVariables } from 'build-utils/css/utils/getMatchedAminoVariables';
import { readFileSync } from 'fs';

const cssContent = readFileSync(
  `build-utils/css/utils/__mocks__/getMatchedAminoVariables-file_with_comment.css`,
  {
    encoding: 'utf-8',
  },
);
type UnitTestItem = {
  case: string;
  input: string;
};

const testCases: UnitTestItem[] = [
  {
    case: 'Real CSS contents',
    input: cssContent,
  },
];

test.each(testCases)(`Case $case`, ({ input }) => {
  expect(getMatchedAminoVariables(input)).toMatchSnapshot();
});
