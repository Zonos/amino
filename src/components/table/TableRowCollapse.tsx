import type { MouseEventHandler, ReactNode } from 'react';

import { Collapse } from 'src/components/collapse/Collapse';
import { TableCell } from 'src/components/table/TableCell';
import { TableRow } from 'src/components/table/TableRow';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

import { Button } from '../button/Button';

type StyleProps = {
  collapsed: boolean;
  collapsible: boolean;
};

const StyledTableRow = styled(TableRow)<StyleProps>`
  ${p =>
    !p.collapsed &&
    css`
      td {
        border-bottom: 0;
      }
    `}
  ${p =>
    p.collapsible &&
    css`
      cursor: pointer;
    `}
`;

const StyledCollapse = styled(Collapse)`
  > div {
    padding-bottom: ${theme.space16};
  }
`;

const CollapsibleCell = styled(TableCell)<{ collapsed: boolean }>`
  border-bottom: ${p => (!p.collapsed ? 'inherit' : 0)};
  && {
    height: ${p => (!p.collapsed ? 'inherit' : 0)};
  }
  > div {
    width: 100%;
  }
`;

const CollapseButton = styled(Button)`
  svg {
    transition: ${theme.transition};

    &.collapsed {
      transform: rotate(180deg);
    }
  }
`;

export type TableRowCollapseProps = {
  className?: string;
  children?: ReactNode;
  onToggleCollapse: MouseEventHandler<HTMLTableRowElement>;
  /**
   * @param collapsed
   * @default false
   */
  collapsed?: boolean;
  rowContent: ReactNode;
};

export const TableRowCollapse = ({
  className,
  children,
  onToggleCollapse,
  collapsed = false,
  rowContent,
}: TableRowCollapseProps) => {
  const collapsible = !!children;
  return (
    <>
      <StyledTableRow
        collapsible={collapsible}
        withHover={collapsible}
        collapsed={collapsed}
        onClick={e => collapsible && onToggleCollapse(e)}
        className={className}
      >
        {rowContent}
        <TableCell align="right">
          {collapsible && (
            <CollapseButton
              icon={<ChevronUpIcon className={collapsed ? 'collapsed' : ''} />}
              intent="plain"
            />
          )}
        </TableCell>
      </StyledTableRow>
      {collapsible && (
        <TableRow>
          <CollapsibleCell colSpan={100} collapsed={collapsed}>
            <StyledCollapse collapsed={collapsed}>{children}</StyledCollapse>
          </CollapsibleCell>
        </TableRow>
      )}
    </>
  );
};
