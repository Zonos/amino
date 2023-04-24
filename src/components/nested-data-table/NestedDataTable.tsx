import { ReactNode, useMemo } from 'react';

import { theme } from 'src/styles/constants/theme';
import { flattenRow } from 'src/utils/flattenRow';
import { useHasuraGqlPagination } from 'src/utils/hooks/action-pivot-table/useHasuraGqlPagination';
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
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  hasPagination?: boolean;
  isFetching: boolean;
  loadingComponent?: ReactNode;
  query: string;
  /**
   * @param cachingKey key to be used for caching response in Swr
   */
  setCachingKey: (cachingKey: string) => void;
  setQuery: (query: string) => void;
  tableData: Record<string, unknown> | Record<string, unknown>[];
  title: string;
};

export const NestedDataTable = ({
  customFlattenRow,
  hasPagination,
  isFetching,
  loadingComponent,
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
    <StyledPivotTableContentWrapper>
      <StyledTableHeader>
        {isFetching && loadingComponent}
        <Text type="header">{title}</Text>
        {!!hasPagination && (
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
