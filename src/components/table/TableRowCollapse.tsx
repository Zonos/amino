import { MouseEventHandler, ReactNode } from 'react';

import { Collapse } from 'src/components/collapse/Collapse';
import { TableCell } from 'src/components/table/TableCell';
import { TableRow } from 'src/components/table/TableRow';
import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

import { ExpandButton } from './ExpandButton';

const StyledTableRow = styled(TableRow)<{
  isExpand: boolean;
  isExpandable: boolean;
}>`
  ${p =>
    p.isExpand &&
    css`
      margin-bottom: 16px;
      td {
        border-bottom: 0;
      }
    `}
  ${p =>
    p.isExpandable &&
    css`
      cursor: pointer;
      :hover {
        background: ${theme.grayL80};
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
  className?: string;
  children?: ReactNode;
  handleExpandClick: MouseEventHandler<HTMLTableRowElement>;
  isExpand: boolean;
  rowContent: ReactNode;
};

export const TableRowCollapse = ({
  className,
  children,
  handleExpandClick,
  isExpand,
  rowContent,
}: TableRowCollapseProps) => {
  const isExpandable = !!children;
  return (
    <>
      <StyledTableRow
        isExpandable={isExpandable}
        isExpand={isExpand}
        onClick={e => isExpandable && handleExpandClick(e)}
        className={className}
      >
        {rowContent}
        <TableCell align="right">
          {isExpandable && <ExpandButton isExpand={isExpand} />}
        </TableCell>
      </StyledTableRow>
      {isExpandable && (
        <TableRow>
          <ExpandableCell colSpan={100} isExpand={isExpand}>
            <Collapse isExpand={isExpand}>{children}</Collapse>
          </ExpandableCell>
        </TableRow>
      )}
    </>
  );
};
