import { ReactNode, useCallback, useMemo, useState } from 'react';

import { FilterIcon } from 'src/icons/FilterIcon';
import { theme } from 'src/styles/constants/theme';
import { extractQueryParams, paramRegex } from 'src/utils/_extractQueryParams';
import { useDropdown } from 'src/utils/hooks/useDropdown';
import styled from 'styled-components';

import { Button } from '../button/Button';
import { MultiSelect } from '../select/MultiSelect';
import { Text } from '../text/Text';
import { type RowWithIndex, ColumnProps, PivotTable } from './PivotTable';

const StyledPivotTableContentWrapper = styled.div`
  height: 100%;
`;
const StyledTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space12};
`;
const StyledTableActionWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.space8};
`;

const StyledFilterWrapper = styled.div`
  position: relative;
`;
const StyledFilter = styled.div`
  display: flex;
  padding: ${theme.space16};
  background-color: ${theme.gray0};
  border: 1px solid ${theme.gray200};
  box-shadow: 0 0 1px ${theme.gray400};
  border-radius: ${theme.radius8};
  width: 300px;
  > div {
    width: 100%;
  }
  /** Multi select styling */
  [class*='ValueContainer'] {
    overflow-x: auto;
  }
  [class*='-multiValue'] {
    display: flex;
    height: 22px;
    align-items: center;
    [role='button'] {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StyledTriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.sizeSm};
  padding: 0 ${theme.space12};
  border: 1px solid ${theme.borderColor};
  border-radius: ${theme.radius6};
`;

type Props<TRow extends RowWithIndex, TSummaryRow extends unknown> = {
  /**
   * @param columns
   * @description This is the columns data that will be used to render the pivot table.
   * 
   * **NOTE**: 
   * - Better to memoize this value to avoid unnecessary re-renders.
   * - The columns key should match with the key has been flatten in the rows data.
   * @example
   * const columns = useMemo(
    () =>
      Object.entries(rows.find(Boolean) || {})
        .filter(([key]) => key !== 'key')
        .flatMap(
          ([key]): Column<
            Record<string, string>,
            Record<string, unknown>
          >[] => [
            {
              key,
              name: key,
            },
          ]
        ),
    [rows]
  );
   */
  columns: ColumnProps<TRow, TSummaryRow>[];
  isFetching: boolean;
  loadingComponent?: ReactNode;
  query: string;
  /**
   * @param rows
   * @description This is the rows data that will be used to render the pivot table.
   * 
   * **NOTE**: 
   * - Better to memoize this value to avoid unnecessary re-renders.
   * - The rows data should be flatten. May use `flattenRow` util to flatten the rows data.
   * @example
   * const rows = useMemo(
    () =>
      tableDataArr.map((item): Record<string, string> => {
        const row = Object.entries(item).reduce(
          (prev, currentVal) =>
            flattenRow({
              currentVal,
              prev,
            }),
          {}
        );
        return row;
      }),
    [tableDataArr]
  );
   */
  rows: TRow[];
  setCachingKey: (name: string) => void;
  setQuery: (query: string) => void;
  title: string;
};

export const ActionPivotTable = <
  TRow extends RowWithIndex,
  TSummaryRow extends unknown
>({
  columns,
  isFetching,
  loadingComponent,
  query,
  rows,
  setCachingKey,
  setQuery,
  title,
}: Props<TRow, TSummaryRow>) => {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);

  const { limit: _limit, offset: _offset } = extractQueryParams({
    query,
    actionName: title,
  });
  const limit =
    _limit && typeof _limit === 'string' ? parseInt(_limit, 10) : 10;
  const offset =
    _offset && typeof _offset === 'string' ? parseInt(_offset, 10) : 0;
  const [currentPage, setCurrentPage] = useState(
    Math.floor(offset / limit) + 1
  );

  const {
    floatingRef,
    left,
    position,
    reference,
    setVisible,
    top,
    visibility,
    visible,
    wrapperRef,
  } = useDropdown();

  const hideColumnOptions = useMemo(
    () =>
      columns.map(column => ({
        label: column.key,
        value: column.key,
      })),
    [columns]
  );

  const filteredHiddenColumns = useMemo(
    () => columns.filter(column => !hiddenColumns.includes(column.key)),
    [columns, hiddenColumns]
  );

  const handlePagination = useCallback(
    (page: number) => {
      const paginatedQuery = query.replace(
        new RegExp(`${title}${paramRegex}`, 'g'),
        match => {
          if (_offset !== undefined && _limit !== undefined) {
            // if offset and limit both exist, just replace the offset
            return match.replace(
              /offset:\s*\d+/g,
              `offset: ${page * limit - limit}`
            );
          }
          if (_limit !== undefined) {
            // if only limit exist, replace the limit with the offset
            return match.replace(
              /(limit:\s*(\d+))/g,
              `$1, offset: ${page * limit - limit}`
            );
          }
          return match;
        }
      );
      setQuery(paginatedQuery);
      setCachingKey(`${title}?page=${page}`);
      setCurrentPage(page);
    },
    [_limit, _offset, limit, query, setCachingKey, setQuery, title]
  );

  return (
    <StyledPivotTableContentWrapper>
      <StyledTableHeader>
        {isFetching && loadingComponent}
        <Text type="header">{title}</Text>
        <StyledTableActionWrapper>
          <StyledFilterWrapper ref={wrapperRef}>
            <StyledTriggerButton
              ref={reference}
              onClick={() => setVisible(!visible)}
            >
              <FilterIcon size={16} /> Filter
            </StyledTriggerButton>
            <StyledFilter
              ref={floatingRef}
              style={{
                position,
                top,
                left,
                opacity: visibility === 'visible' ? 1 : 0,
                zIndex: visibility === 'visible' ? 1 : 0,
              }}
            >
              <MultiSelect
                label="Hide column"
                hideSelectedOptions={false}
                options={hideColumnOptions}
                value={hideColumnOptions.filter(col =>
                  hiddenColumns.includes(col.value)
                )}
                onChange={_hiddenColumns => {
                  setHiddenColumns(
                    _hiddenColumns.flatMap(column => [column.value])
                  );
                }}
              />
            </StyledFilter>
          </StyledFilterWrapper>
          <Button
            intent="outline"
            disabled={currentPage === 1}
            onClick={() => {
              handlePagination(currentPage - 1);
            }}
          >
            Previous page
          </Button>
          {currentPage}
          <Button
            onClick={() => {
              handlePagination(currentPage + 1);
            }}
            intent="outline"
          >
            Next page
          </Button>
        </StyledTableActionWrapper>
      </StyledTableHeader>
      <PivotTable
        headerRowHeight={40}
        rowHeight={40}
        rows={rows}
        columns={filteredHiddenColumns}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
      />
    </StyledPivotTableContentWrapper>
  );
};
