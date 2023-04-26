import { useMemo } from 'react';

import { flattenRow } from 'src/utils/flattenRow';
import { useHasuraGqlPagination } from 'src/utils/hooks/action-pivot-table/useHasuraGqlPagination';

import { NestedDataTable } from './NestedDataTable';

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
    [tableData]
  );

  const { currentPage, handlePagination } = useHasuraGqlPagination({
    query,
    setCachingKey,
    setQuery,
    actionName: title,
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