import { useCallback, useMemo, useRef, useState } from 'react';
import DataGrid, {
  type Column,
  type DataGridHandle,
  type DataGridProps,
  type Renderers,
  type RenderSortStatusProps,
  type SortColumn,
} from 'react-data-grid';

import styled from 'styled-components';

import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { theme } from 'src/styles/constants/theme';
import type { StyledProps } from 'src/types';
import { addIndex } from 'src/utils/addIndex';

export type KeyValue = string | number;
type RowData = Record<string, unknown>;

type OverrideColumn<TRow extends RowData> = {
  key: keyof TRow extends string
    ? keyof TRow | (string & { _placeholder?: never })
    : never;
};
export type ColumnProps<TRow extends RowData, TSummaryRow = unknown> = Exclude<
  Column<TRow, TSummaryRow>,
  'key'
> &
  OverrideColumn<TRow>;

type OverrideProps<TRow extends RowData, TSummaryRow extends unknown> = {
  columns: ColumnProps<TRow, TSummaryRow>[];
  rows: TRow[];
  /**
   * @default string
   */
  tableHeight?: string;
};

export type NestedRowData = {
  _expandedData: Record<string, unknown>[]; // for nested table data
  _expandedKey: string;
};

export type RowWithIndex<Row extends RowData = RowData> = Row & {
  _itemIndex?: number;
} & NestedRowData;

type Props<
  TRow extends RowWithIndex,
  TSummaryRow extends unknown,
  TRowKey extends KeyValue,
> = Omit<
  DataGridProps<TRow, TSummaryRow, TRowKey>,
  keyof OverrideProps<TRow, TSummaryRow>
> &
  OverrideProps<TRow, TSummaryRow>;

type Comparator<TRow extends unknown> = (a: TRow, b: TRow) => number;

type StyledWrapperProps = StyledProps<Props<RowWithIndex, unknown, KeyValue>>;

const SortStatus = styled.span`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div<StyledWrapperProps>`
  height: ${props =>
    props.$tableHeight ? props.$tableHeight : 'calc(100vh - 145px)'};
  min-height: ${props => props.$tableHeight};
  position: relative;
  .data-grid {
    block-size: 100%;
    border-radius: 8px;
    background-color: inherit;
    .rdg-row {
      background-color: ${theme.gray0};
      color: ${theme.textColor};
    }
    .rdg-header-row,
    .rdg-summary-row {
      background-color: ${theme.gray100};
      color: ${theme.textColor};
      font-weight: 700;
    }
    .rdg-cell {
      border: 1px solid ${theme.gray200};
    }
  }
`;

/**
 * Awesome data grid
 * @repo https://github.com/adazzle/react-data-grid
 * @documentation https://adazzle.github.io/react-data-grid/#/grouping
 * @example https://github.com/adazzle/react-data-grid/tree/main/website
 */
export const PivotTable = <
  TRow extends RowWithIndex,
  TSummaryRow = unknown,
  TRowKey extends KeyValue = KeyValue,
>({
  columns,
  onSortColumnsChange,
  renderers: _renderers,
  rows,
  /** If the change want to make for this handler */
  sortColumns: _sortColumns = [],
  tableHeight,
  ...rest
}: Props<TRow, TSummaryRow, TRowKey>) => {
  const dataGridRef = useRef<DataGridHandle>(null);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>(
    _sortColumns || [],
  );

  const renderSortStatus = useCallback(
    ({ priority, sortDirection }: RenderSortStatusProps) => {
      if (!sortDirection) {
        return null;
      }
      return (
        <SortStatus>
          {sortDirection === 'ASC' ? (
            <ChevronUpIcon color="gray900" />
          ) : (
            <ChevronDownIcon color="gray900" />
          )}
          <span>{priority}</span>
        </SortStatus>
      );
    },
    [],
  );
  const defaultRenderers: Renderers<TRow, TSummaryRow> = {
    renderSortStatus,
    ..._renderers,
  };
  const modifiedColumns: Column<TRow, TSummaryRow>[] = [
    {
      frozen: true,
      key: '_itemIndex',
      name: '',
      sortable: false,
      width: 60,
    },
    ...columns,
  ];

  const sortedRows = useMemo((): readonly TRow[] => {
    if (sortColumns.length === 0) return rows.map(addIndex);
    const getComparator =
      (sortColumn: keyof TRow): Comparator<TRow> =>
      (a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        switch (typeof valueA) {
          case 'boolean': {
            if (valueA === valueB) {
              return 0;
            }
            return valueA ? 1 : -1;
          }
          case 'string': {
            return typeof valueB === 'string'
              ? valueA.localeCompare(valueB)
              : 0;
          }
          case 'number': {
            return typeof valueB === 'number' ? valueA - valueB : 0;
          }
          default:
            return 0;
        }
      };

    return [...rows]
      .sort((a, b) => {
        let order = 0;
        sortColumns.some(sort => {
          const comparator = getComparator(sort.columnKey);
          const compResult = comparator(a, b);
          if (compResult !== 0) {
            order = sort.direction === 'ASC' ? compResult : -compResult;
            return 1;
          }
          return 0;
        });
        return order;
      })
      .map(addIndex);
  }, [rows, sortColumns]);

  return (
    <StyledWrapper $tableHeight={tableHeight}>
      <DataGrid
        ref={dataGridRef}
        className="data-grid"
        columns={modifiedColumns}
        onSortColumnsChange={onSortColumnsChange || setSortColumns}
        renderers={defaultRenderers}
        rows={sortedRows}
        sortColumns={sortColumns}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </StyledWrapper>
  );
};
