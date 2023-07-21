import { extractQueryParams } from 'src/utils/_extractQueryParams';

test('Params in one line', () => {
  const query = `query MyQuery {
    viewport_amount_subtotals_aggregate(limit: 10, offset: 10) {
      aggregate {
        count
      }
    }
  }`;
  expect(
    extractQueryParams({
      actionName: 'viewport_amount_subtotals_aggregate',
      query,
    }),
  ).toMatchInlineSnapshot(`
    {
      "limit": "10",
      "offset": "10",
    }
  `);
});

test('Params in multiple lines', () => {
  const query = `query MyQuery {
    viewport_amount_subtotals_aggregate(
      limit: 10,
      offset: 10
    ) {
      aggregate {
        count
      }
    }
  }`;
  expect(
    extractQueryParams({
      actionName: 'viewport_amount_subtotals_aggregate',
      query,
    }),
  ).toMatchInlineSnapshot(`
    {
      "limit": "10",
      "offset": "10",
    }
  `);
});
