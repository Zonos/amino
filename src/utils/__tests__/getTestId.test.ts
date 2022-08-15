import { getTestId } from '../getTestId';

type TestCase = {
  case: string;
  name?: string;
  componentName: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    case: `Should return test id for 'name' field`,
    name: 'Alcohol content',
    componentName: 'alcohol-content',
    expected: 'amino--alcohol-content',
  },
  {
    case: `Should return test id for 'componentName' field`,
    name: undefined,
    componentName: 'checkbox',
    expected: 'amino--checkbox',
  },
  {
    case: `Should return correct test id for UPPERCASED 'componentName'`,
    name: undefined,
    componentName: 'CHECKBOXX',
    expected: 'amino--checkboxx',
  },
  {
    case: `Should return correct test id for UPPERCASED WITH SPACE 'componentName'`,
    name: undefined,
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--checkboxx---something',
  },
  {
    case: `Should return correct test id for UPPERCASE WITH NUMBER 'name'`,
    name: 'TEST123',
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--test123',
  },
  {
    case: `Should return correct test id for UPPERCASE WITH NUMBER AND SPECIAL CHARACTER 'name'`,
    name: 'TEST__test  123!!@some',
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--test__test--123---some',
  },
  {
    case: `Should return correct test id for 'name' (WITHOUT TRANSFORMING '_' to '-')`,
    name: 'TEST__test---qwe',
    componentName: 'CHECKBOXX   SOMETHING',
    expected: 'amino--test__test---qwe',
  },
  {
    case: `Should return correct test id for 'name' (WITH REGULAR TEXT)`,
    name: 'Home delivery type (optional)',
    componentName: '',
    expected: 'amino--home-delivery-type--optional-',
  },
];
describe('should return valid id', () => {
  test.each(testCases)('$case', ({ expected, componentName, name }) => {
    expect(getTestId({ componentName, name })).toBe(expected);
  });
});
