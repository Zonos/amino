import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Column } from 'react-data-grid';

import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { Filter } from 'src/components/nested-data-table/_Filter';
import {
  type RowWithIndex,
  PivotTable,
} from 'src/components/pivot-table/PivotTable';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { ChevronRightCircleIcon } from 'src/icons/ChevronRightCircleIcon';
import { theme } from 'src/styles/constants/theme';
import { flattenRow } from 'src/utils/flattenRow';
import { setupNestedData } from 'src/utils/setupNestedData';
import { truncateText } from 'src/utils/truncateText';

const StyledFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: var(--amino-space-12);
`;

const StyledExpandWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  svg {
    transition: 0.3s all ease;
  }
  .expanding-button {
    svg {
      transform: rotate(90deg);
    }
  }
`;

const StyledTableWrapper = styled.div`
  .expanding {
    background-color: ${theme.gray50};
  }
  & & {
    padding: ${theme.space4} ${theme.space12} ${theme.space24};
  }
`;

type ColumnType = Column<RowWithIndex, Record<string, unknown>>;

type ColumnCell = Parameters<NonNullable<ColumnType['renderCell']>>;

type Props<TRow extends Record<string, unknown>> = {
  customColumnCells?: {
    [key in keyof TRow]?: (props: ColumnCell[0]) => ReactNode;
  };
  customFlattenRow?: typeof flattenRow;
  noFilter?: boolean;
  tableDataArr: TRow[];
};

export const TableData = <TRow extends Record<string, unknown>>({
  customColumnCells,
  customFlattenRow,
  noFilter,
  tableDataArr,
}: Props<TRow>) => {
  const flatten = customFlattenRow || flattenRow;
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);

  const setUpRows = useCallback(
    () =>
      tableDataArr.map((item): RowWithIndex => {
        const row = Object.entries(item).reduce(
          (prev, currentVal) =>
            flatten({
              currentVal,
              prev,
            }),
          {},
        );
        return setupNestedData(row);
      }),
    [flatten, tableDataArr],
  );

  const [rows, setRows] = useState<RowWithIndex[]>(setUpRows());

  useEffect(() => {
    if (tableDataArr) {
      setRows(setUpRows());
    }
  }, [setUpRows, tableDataArr]);

  const renderTriggerFormater = useCallback(
    ({ column, onRowChange, row }: ColumnCell[0]) => {
      const currentValue = row[column.key] as ReactNode;
      // if the value is an array, render a button to expand the row
      if (Array.isArray(currentValue)) {
        const noItems = currentValue.length === 0;
        const isExpanding = row._expandedKey === column.key;
        return (
          <StyledExpandWrapper>
            <Tooltip showTooltip={noItems} subtitle="This list has no items.">
              <Button
                className={isExpanding ? 'expanding-button' : ''}
                disabled={noItems}
                icon={<ChevronRightCircleIcon />}
                intent="subtle"
                onClick={() =>
                  onRowChange({
                    ...row,
                    // if the row is already expanded, collapse it
                    _expandedKey: !isExpanding ? column.key : '',
                  })
                }
              />
            </Tooltip>
          </StyledExpandWrapper>
        );
      }
      if (row._expandedData && row._expandedData.length > 0) {
        return (
          <TableData
            customColumnCells={customColumnCells}
            customFlattenRow={customFlattenRow}
            noFilter
            tableDataArr={row._expandedData as TRow[]}
          />
        );
      }

      if (typeof currentValue === 'string') {
        return truncateText({
          addEllipsis: true,
          length: 40,
          text: currentValue,
        });
      }

      return currentValue;
    },
    [customColumnCells, customFlattenRow],
  );

  const columns = useMemo(
    () =>
      Object.entries(rows.find(Boolean) || {})
        // filter all of the columns that are not needed
        .filter(([key]) => key !== 'key' && !key.startsWith('_'))
        .flatMap(([key]): ColumnType[] => [
          {
            key,
            name: key,
            renderCell: customColumnCells?.[key] || renderTriggerFormater,
          },
        ]),
    [customColumnCells, renderTriggerFormater, rows],
  );

  const filteredHiddenColumns: ColumnType[] = useMemo(() => {
    const filteredColumns = columns.filter(
      column => !hiddenColumns.includes(column.key),
    );
    return filteredColumns.map(column => ({
      ...column,
      cellClass: args =>
        args._expandedKey === column.key || args._expandedData.length > 0
          ? 'expanding'
          : '',
      // if the column is a nested column, expand the colSpan to the full width
      colSpan: args =>
        args.type === 'ROW' && args.row._expandedData.length > 0
          ? filteredColumns.filter(({ key }) => !key.startsWith('_')).length
          : undefined,
    }));
  }, [columns, hiddenColumns]);

  return (
    <StyledTableWrapper>
      <StyledFilterWrapper>
        {!noFilter && (
          <Filter
            columns={columns}
            hiddenColumns={hiddenColumns}
            setHiddenColumns={setHiddenColumns}
          />
        )}
      </StyledFilterWrapper>
      <PivotTable
        columns={filteredHiddenColumns}
        defaultColumnOptions={{
          resizable: true,
          sortable: false,
        }}
        headerRowHeight={40}
        onRowsChange={(newRows, { indexes }) => {
          const index = indexes[0];
          const row = index !== undefined ? newRows[index] : null;
          if (row && index !== undefined) {
            const expandedKey = row._expandedKey;

            const expandedValue = row[expandedKey];

            // check if the row is expanded (when expandedKey is set)
            if (expandedValue && Array.isArray(expandedValue)) {
              // remove the expanded row if exist
              const nextIndex = index + 1;
              const nextRow = newRows[nextIndex];

              const hasRowExpanded =
                nextRow?._expandedData && nextRow._expandedData.length > 0;

              const firstRow = expandedValue[0];
              // check if it's a nested primitive row data or nested object row data,
              // make sure that the nested row data is array of object
              const formatedNestedRows =
                typeof firstRow === 'object' && firstRow
                  ? (expandedValue as Record<string, unknown>[])
                  : expandedValue.map(item => ({
                      item,
                    }));
              // add item to the specific index in array, clean up the the expanded item first if needed
              newRows.splice(index + 1, hasRowExpanded ? 1 : 0, {
                _expandedData: formatedNestedRows,
                _expandedKey: '',
              });
            } else {
              // remove the expanded row
              newRows.splice(index + 1, 1);
            }
            setRows(newRows);
          }
        }}
        rowHeight={args =>
          // expand the row height if the row is expanded
          args.type === 'ROW' && args.row?._expandedData?.length > 0 ? 300 : 45
        }
        rows={rows}
        tableHeight="100%"
      />
    </StyledTableWrapper>
  );
};
