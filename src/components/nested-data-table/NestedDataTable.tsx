import { type ReactNode, useMemo } from 'react';
import type { Column } from 'react-data-grid';

import { Button } from 'src/components/button/Button';
import { TableData } from 'src/components/nested-data-table/_TableData';
import type { RowWithIndex } from 'src/components/pivot-table/PivotTable';
import { RestState } from 'src/components/rest-state/RestState';
import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import type { flattenRow } from 'src/utils/flattenRow';

import styles from './NestedDataTable.module.scss';

type ColumnType<TRow> = Column<TRow, Record<string, unknown>>;
export type ColumnCell<TRow extends Record<string, unknown>> = NonNullable<
  ColumnType<TRow>['renderCell']
>;
export type CustomColumnCells<TRow extends Record<string, unknown>> = {
  [key in keyof TRow]?: ColumnCell<TRow>;
};

type Props<TRow extends Record<string, unknown>> = BaseProps & {
  currentPage?: number;
  customColumnCells?: CustomColumnCells<TRow>;
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  handlePagination?: (page: number) => void;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFetching: boolean;
  loadingComponent?: ReactNode;
  restState?: ReactNode;
  tableData: TRow[];
  title?: string;
};

export const NestedDataTable = <
  TRow extends Record<string, unknown> | Record<string, unknown>,
>({
  currentPage,
  customColumnCells,
  customFlattenRow,
  handlePagination,
  hasNextPage,
  hasPreviousPage,
  isFetching,
  loadingComponent,
  restState,
  style,
  tableData,
  title,
}: Props<TRow>) => {
  const tableDataArr = useMemo(
    () => (Array.isArray(tableData) ? tableData : [tableData]),
    [tableData],
  );

  const showPagination =
    !!handlePagination && !!currentPage && tableData.length;

  const renderTable = () => {
    if (isFetching) {
      return loadingComponent ? (
        <>{loadingComponent}</>
      ) : (
        <RestState label="Loading..." />
      );
    }

    if (tableDataArr.length === 0) {
      return restState ? (
        <>{restState}</>
      ) : (
        <RestState label="No data available." />
      );
    }

    return (
      <TableData
        customColumnCells={customColumnCells as CustomColumnCells<RowWithIndex>}
        customFlattenRow={customFlattenRow}
        tableDataArr={tableDataArr}
      />
    );
  };

  return (
    <div className={styles.styledPivotTableContentWrapper} style={style}>
      <div className={styles.styledTableHeader}>
        {!!title && <Text type="header">{title}</Text>}
        {/* Only show pagination if handlePagination and currentPage is provided */}
        {!!showPagination && (
          <div className={styles.styledTableActionWrapper}>
            <Button
              disabled={currentPage === 1 || !hasPreviousPage}
              onClick={() => {
                if (hasPreviousPage) {
                  handlePagination(currentPage - 1);
                }
              }}
              outline
            >
              Previous page
            </Button>
            {currentPage}
            <Button
              disabled={!hasNextPage}
              onClick={() => {
                if (hasNextPage) {
                  handlePagination(currentPage + 1);
                }
              }}
              outline
            >
              Next page
            </Button>
          </div>
        )}
      </div>

      {renderTable()}
    </div>
  );
};
