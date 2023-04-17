import { flattenRow } from '../flattenRow';

test('flatten table row data', () => {
  const tableDataArr = [
    {
      nodes: [
        {
          fees: 0,
          items: 15.54,
          shipping: 35,
          taxes: 0,
          duties: 0,
          created_at: '2010-04-20T23:06:44',
        },
        {
          fees: 0,
          items: 15.54,
          shipping: 84,
          taxes: 0,
          duties: 0,
          created_at: '2010-04-20T23:06:44',
        },
      ],
      aggregate: {
        max: {
          created_at: '2010-04-20T23:06:44',
          fees: 0,
          duties: 0,
        },
        count: 2,
      },
    },
  ];
  const t = tableDataArr.map((item): Record<string, string> => {
    const row = Object.entries(item).reduce(
      (prev, currentVal) =>
        flattenRow({
          currentVal,
          prev,
        }),
      {}
    );
    return row;
  });

  expect(t).toMatchInlineSnapshot(`
    Array [
      Object {
        "aggregate.count": 2,
        "aggregate.created_at.created_at": "2010-04-20T23:06:44",
        "aggregate.duties.duties": 0,
        "aggregate.fees.fees": 0,
        "nodes": "[{\\"fees\\":0,\\"items\\":15.54,\\"shipping\\":35,\\"taxes\\":0,\\"duties\\":0,\\"created_at\\":\\"2010-04-20T23:06:44\\"},{\\"fees\\":0,\\"items\\":15.54,\\"shipping\\":84,\\"taxes\\":0,\\"duties\\":0,\\"created_at\\":\\"2010-04-20T23:06:44\\"}]",
      },
    ]
  `);
});
