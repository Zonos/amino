import { addIndex } from '../addIndex';

type UnitTest = {
  input: Array<Record<string, unknown>>;
  expected: ReturnType<typeof addIndex>[];
};

const testCases: UnitTest[] = [
  {
    input: [
      {
        key: 'test',
        item: '123',
      },
      {
        key: 'test1',
        item: '456',
      },
    ],
    expected: [
      {
        key: 'test',
        item: '123',
        _itemIndex: 1,
      },
      {
        key: 'test1',
        item: '456',
        _itemIndex: 2,
      },
    ],
  },
];

test.each(testCases)('test: $input', ({ input, expected }) => {
  expect(input.map(addIndex)).toStrictEqual(expected);
});
