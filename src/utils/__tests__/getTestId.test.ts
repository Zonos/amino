import { getTestId } from 'src/utils/getTestId';

type TestCase = {
  case: string;
  componentName: string;
  expected: string;
  name?: string;
};

const testCases: TestCase[] = [
  {
    case: `Should return test id for 'name' field`,
    componentName: 'alcohol-content',
    expected: 'amino--alcohol-content',
    name: 'Alcohol content',
  },
  {
    case: `Should return test id for 'componentName' field`,
    componentName: 'checkbox',
    expected: 'amino--checkbox',
    name: undefined,
  },
  {
    case: `Should return correct test id for UPPERCASED 'componentName'`,
    componentName: 'CHECKBOXX',
    expected: 'amino--checkboxx',
    name: undefined,
  },
  {
    case: `Should return correct test id for UPPERCASED WITH SPACE 'componentName'`,
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--checkboxx---something',
    name: undefined,
  },
  {
    case: `Should return correct test id for UPPERCASE WITH NUMBER 'name'`,
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--test123',
    name: 'TEST123',
  },
  {
    case: `Should return correct test id for UPPERCASE WITH NUMBER AND SPECIAL CHARACTER 'name'`,
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--test__test--123---some',
    name: 'TEST__test  123!!@some',
  },
  {
    case: `Should return correct test id for 'name' (WITHOUT TRANSFORMING '_' to '-')`,
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--test__test---qwe',
    name: 'TEST__test---qwe',
  },
  {
    case: `Should return correct test id for 'name' (WITH REGULAR TEXT)`,
    componentName: '',
    expected: 'amino--home-delivery-type--optional-',
    name: 'Home delivery type (optional)',
  },
];
describe('should return valid id', () => {
  test.each(testCases)('$case', ({ componentName, expected, name }) => {
    expect(getTestId({ componentName, name })).toBe(expected);
  });
});
