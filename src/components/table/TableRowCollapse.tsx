import React, { ReactNode } from 'react';

import { Collapse } from 'src/components/collapse/Collapse';
import { TableCell } from 'src/components/table/TableCell';
import { TableRow } from 'src/components/table/TableRow';
import styled, { css } from 'styled-components';

import { ButtonProps } from '../button/Button';
import { ExpandButton } from './ExpandButton';

const StyledTableRow = styled(TableRow)<{ isExpand: boolean }>`
  ${p =>
    p.isExpand &&
    css`
      margin-bottom: 16px;
      td {
        border-bottom: 0;
      }
    `}
`;

const ExpandableCell = styled(TableCell)<{ isExpand: boolean }>`
  font-size: ${p => (p.isExpand ? 'inherit' : 0)};
  border-bottom: ${p => (p.isExpand ? 'inherit' : 0)};
  && {
    height: ${p => (p.isExpand ? 'inherit' : 0)};
  }
  > div {
    width: 100%;
  }
`;

export type TableRowCollapseProps = {
  children: ReactNode;
  isExpand: boolean;
  handleExpandClick: ButtonProps['onClick'];
  rowContent: ReactNode;
};

export const TableRowCollapse = ({
  children,
  handleExpandClick,
  isExpand,
  rowContent,
}: TableRowCollapseProps) => {
  return (
    <>
      <StyledTableRow isExpand={isExpand}>
        {rowContent}
        <TableCell align="right">
          <ExpandButton isExpand={isExpand} onClick={handleExpandClick} />
        </TableCell>
      </StyledTableRow>
      <TableRow>
        <ExpandableCell colSpan={100} isExpand={isExpand}>
          <Collapse isExpand={isExpand}>{children}</Collapse>
        </ExpandableCell>
      </TableRow>
    </>
  );
};
