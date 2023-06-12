import { type ReactNode, useMemo } from 'react';
import type { Column } from 'react-data-grid';

import { theme } from 'src/styles/constants/theme';
import { flattenRow } from 'src/utils/flattenRow';
import styled from 'styled-components';

import { Button } from '../button/Button';
import type { RowWithIndex } from '../pivot-table/PivotTable';
import { RestState } from '../rest-state/RestState';
import { Text } from '../text/Text';
import { TableData } from './_TableData';

const StyledPivotTableContentWrapper = styled.div`
  height: 100%;
`;
const StyledTableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.space8};
`;
const StyledTableActionWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.space8};
`;

type ColumnType<TRow> = Column<TRow, Record<string, unknown>>;
export type ColumnFormatter<TRow extends Record<string, unknown>> = NonNullable<
  ColumnType<TRow>['formatter']
>;
export type CustomColumnFormatters<TRow extends Record<string, unknown>> = {
  [key in keyof TRow]?: ColumnFormatter<TRow>;
};

type Props<TRow extends Record<string, unknown>> = {
  currentPage?: number;
  customColumnFormatters?: CustomColumnFormatters<TRow>;
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFetching: boolean;
  loadingComponent?: ReactNode;
  restState?: ReactNode;
  tableData: TRow[];
  title?: string;
  handlePagination?: (page: number) => void;
};

export const NestedDataTable = <
  TRow extends Record<string, unknown> | Record<string, unknown>
>({
  currentPage,
  customColumnFormatters,
  customFlattenRow,
  handlePagination,
  hasNextPage,
  hasPreviousPage,
  isFetching,
  loadingComponent,
  restState,
  tableData,
  title,
}: Props<TRow>) => {
  const tableDataArr = useMemo(
    () => (Array.isArray(tableData) ? tableData : [tableData]),
    [tableData]
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
        customColumnFormatters={
          customColumnFormatters as CustomColumnFormatters<RowWithIndex>
        }
        customFlattenRow={customFlattenRow}
        tableDataArr={tableDataArr}
      />
    );
  };

  return (
    <StyledPivotTableContentWrapper>
      <StyledTableHeader>
        {!!title && <Text type="header">{title}</Text>}
        {/* Only show pagination if handlePagination and currentPage is provided */}
        {!!showPagination && (
          <StyledTableActionWrapper>
            <Button
              disabled={currentPage === 1 || !hasPreviousPage}
              intent="outline"
              onClick={() => {
                if (hasPreviousPage) {
                  handlePagination(currentPage - 1);
                }
              }}
            >
              Previous page
            </Button>
            {currentPage}
            <Button
              disabled={!hasNextPage}
              intent="outline"
              onClick={() => {
                if (hasNextPage) {
                  handlePagination(currentPage + 1);
                }
              }}
            >
              Next page
            </Button>
          </StyledTableActionWrapper>
        )}
      </StyledTableHeader>

      {renderTable()}
    </StyledPivotTableContentWrapper>
  );
};
