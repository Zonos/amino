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
  /**
   * Current page number for pagination
   */
  currentPage?: number;
  /**
   * Custom rendering functions for specific column cells
   */
  customColumnCells?: CustomColumnCells<TRow>;
  /**
   * Custom function to flatten nested objects in table data
   * If not provided, the default flattenRow from "src/utils/flattenRow.ts" will be used
   */
  customFlattenRow?: typeof flattenRow;
  /**
   * Handler function for page changes in pagination
   * @param page - The new page number
   */
  handlePagination?: (page: number) => void;
  /**
   * Whether there is a next page available for pagination
   */
  hasNextPage?: boolean;
  /**
   * Whether there is a previous page available for pagination
   */
  hasPreviousPage?: boolean;
  /**
   * Whether data is currently being fetched
   */
  isFetching: boolean;
  /**
   * Custom component to display while data is loading
   */
  loadingComponent?: ReactNode;
  /**
   * Custom component to display when there is no data or an error state
   */
  restState?: ReactNode;
  /**
   * Data to be displayed in the table
   */
  tableData: TRow[];
  /**
   * Optional title for the table
   */
  title?: string;
};

/**
 * A data table component that can display nested data structures with pagination support.
 * Automatically extracts and displays nested object properties in a tabular format,
 * with support for custom cell rendering and pagination controls.
 *
 * @example Basic usage
 * ```tsx
 * type User = {
 *   id: number;
 *   name: string;
 *   details: {
 *     email: string;
 *     phone: string;
 *   };
 * };
 *
 * const [users, setUsers] = useState<User[]>([]);
 * const [loading, setLoading] = useState(true);
 *
 * useEffect(() => {
 *   fetchUsers().then(data => {
 *     setUsers(data);
 *     setLoading(false);
 *   });
 * }, []);
 *
 * <NestedDataTable
 *   isFetching={loading}
 *   tableData={users}
 *   title="User List"
 * />
 * ```
 *
 * @example With custom cell rendering
 * ```tsx
 * <NestedDataTable
 *   customColumnCells={{
 *     name: props => <strong>{props.row.name}</strong>,
 *     'details.email': props => <a href={`mailto:${props.row.details.email}`}>{props.row.details.email}</a>
 *   }}
 *   isFetching={loading}
 *   tableData={users}
 *   title="User List with Custom Formatting"
 * />
 * ```
 *
 * @example With pagination
 * ```tsx
 * const [page, setPage] = useState(1);
 * const [hasMore, setHasMore] = useState(true);
 *
 * <NestedDataTable
 *   currentPage={page}
 *   handlePagination={setPage}
 *   hasNextPage={hasMore}
 *   hasPreviousPage={page > 1}
 *   isFetching={loading}
 *   tableData={users}
 *   title="Paginated User List"
 * />
 * ```
 */
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
