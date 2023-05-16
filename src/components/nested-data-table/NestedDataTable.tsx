import { ReactNode, useMemo } from 'react';
import { Column } from 'react-data-grid';

import { theme } from 'src/styles/constants/theme';
import { flattenRow } from 'src/utils/flattenRow';
import styled from 'styled-components';

import { Button } from '../button/Button';
import { RowWithIndex } from '../pivot-table/PivotTable';
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

type ColumnType = Column<RowWithIndex, Record<string, unknown>>;
type ColumnFormatter = Parameters<NonNullable<ColumnType['formatter']>>;

type Props<TRow = Record<string, unknown>> = {
  currentPage?: number;
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  customColumnFormatters?: {
    [key in keyof TRow]?: (props: ColumnFormatter[0]) => ReactNode;
  };
  handlePagination?: (page: number) => void;
  isFetching: boolean;
  loadingComponent?: ReactNode;
  restState?: ReactNode;
  tableData: TRow[];
  title?: string;
};

export const NestedDataTable = <
  TRow extends Record<string, unknown> | Record<string, unknown>
>({
  currentPage,
  customFlattenRow,
  customColumnFormatters,
  handlePagination,
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
        customColumnFormatters={customColumnFormatters}
        tableDataArr={tableDataArr}
        customFlattenRow={customFlattenRow}
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
        )}
      </StyledTableHeader>

      {renderTable()}
    </StyledPivotTableContentWrapper>
  );
};
