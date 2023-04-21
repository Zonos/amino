import { extractQueryParams } from '../_extractQueryParams';

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
      query,
      actionName: 'viewport_amount_subtotals_aggregate',
    })
  ).toMatchInlineSnapshot(`
    Object {
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
      query,
      actionName: 'viewport_amount_subtotals_aggregate',
    })
  ).toMatchInlineSnapshot(`
    Object {
      "limit": "10",
      "offset": "10",
    }
  `);
});