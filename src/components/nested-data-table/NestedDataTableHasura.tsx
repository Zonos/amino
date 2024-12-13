import { useMemo } from 'react';

import { NestedDataTable } from 'src/components/nested-data-table/NestedDataTable';
import type { flattenRow } from 'src/utils/flattenRow';
import { useHasuraGqlPagination } from 'src/utils/hooks/action-pivot-table/useHasuraGqlPagination';

type Props = {
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  isFetching: boolean;
  query: string;
  /**
   * @param cachingKey key to be used for caching response in Swr
   */
  setCachingKey: (cachingKey: string) => void;
  setQuery: (query: string) => void;
  tableData: Record<string, unknown> | Record<string, unknown>[];
  title: string;
};

export const NestedDataTableHasura = ({
  customFlattenRow,
  isFetching,
  query,
  setCachingKey,
  setQuery,
  tableData,
  title,
}: Props) => {
  const tableDataArr = useMemo(
    () => (Array.isArray(tableData) ? tableData : [tableData]),
    [tableData],
  );

  const { currentPage, handlePagination } = useHasuraGqlPagination({
    actionName: title,
    query,
    setCachingKey,
    setQuery,
  });

  return (
    <NestedDataTable
      currentPage={currentPage}
      customFlattenRow={customFlattenRow}
      handlePagination={handlePagination}
      isFetching={isFetching}
      tableData={tableDataArr}
      title={title}
    />
  );
};
