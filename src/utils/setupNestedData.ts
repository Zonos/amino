import type { NestedRowData } from 'src/components/pivot-table/PivotTable';

export const setupNestedData = <T extends Record<string, unknown>>(
  row: T
): T & NestedRowData => ({
  ...row,
  _expandedData: [],
  _expandedKey: '',
});
