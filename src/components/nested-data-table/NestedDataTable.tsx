import { type ReactNode, useMemo } from 'react';

import { theme } from 'src/styles/constants/theme';
import { flattenRow } from 'src/utils/flattenRow';
import styled from 'styled-components';

import { Button } from '../button/Button';
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

type Props = {
  currentPage?: number;
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  handlePagination?: (page: number) => void;
  isFetching: boolean;
  loadingComponent?: ReactNode;
  tableData: Record<string, unknown> | Record<string, unknown>[];
  title: string;
};

export const NestedDataTable = ({
  currentPage,
  customFlattenRow,
  handlePagination,
  isFetching,
  loadingComponent,
  tableData,
  title,
}: Props) => {
  const tableDataArr = useMemo(
    () => (Array.isArray(tableData) ? tableData : [tableData]),
    [tableData]
  );

  return (
    <StyledPivotTableContentWrapper>
      <StyledTableHeader>
        {isFetching && loadingComponent}
        <Text type="header">{title}</Text>
        {/* Only show pagination if handlePagination and currentPage is provided */}
        {!!handlePagination && !!currentPage && (
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

      <TableData
        tableDataArr={tableDataArr}
        customFlattenRow={customFlattenRow}
      />
    </StyledPivotTableContentWrapper>
  );
};
