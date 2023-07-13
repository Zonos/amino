import { addIndex } from '../addIndex';

type UnitTest = {
  expected: ReturnType<typeof addIndex>[];
  input: Array<Record<string, unknown>>;
};

const testCases: UnitTest[] = [
  {
    expected: [
      {
        _itemIndex: 1,
        item: '123',
        key: 'test',
      },
      {
        _itemIndex: 2,
        item: '456',
        key: 'test1',
      },
    ],
    input: [
      {
        item: '123',
        key: 'test',
      },
      {
        item: '456',
        key: 'test1',
      },
    ],
  },
];

test.each(testCases)('test: $input', ({ expected, input }) => {
  expect(input.map(addIndex)).toBe(expected);
});
