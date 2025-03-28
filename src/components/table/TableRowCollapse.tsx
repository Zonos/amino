import type { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { Collapse } from 'src/components/collapse/Collapse';
import { TableCell } from 'src/components/table/TableCell';
import { TableRow } from 'src/components/table/TableRow';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './TableRowCollapse.module.scss';

export type TableRowCollapseProps = BaseProps & {
  children?: ReactNode;
  /**
   * @param collapsed
   * @default false
   */
  collapsed?: boolean;
  onToggleCollapse: MouseEventHandler<HTMLTableRowElement>;
  rowContent: ReactNode;
  /**
   * @param rowKey
   * @default undefined
   * @note Only used for testing
   */
  rowKey?: string;
};

export const TableRowCollapse = ({
  children,
  className,
  collapsed = false,
  onToggleCollapse,
  rowContent,
  rowKey,
  style,
}: TableRowCollapseProps) => {
  const collapsible = !!children;
  return (
    <>
      <TableRow
        className={clsx(
          className,
          styles.styledTableRow,
          collapsed && styles.collapsed,
          collapsible && styles.collapsible,
        )}
        onClick={e => collapsible && onToggleCollapse(e)}
        rowTestId={`amino--row-${rowKey}`}
        withHover={collapsible}
      >
        {rowContent}
        <TableCell align="right">
          {collapsible && (
            <Button
              className={styles.collapseButton}
              icon={<ChevronUpIcon />}
              variant="plain"
            />
          )}
        </TableCell>
      </TableRow>
      {collapsible && (
        <TableRow rowTestId={`amino--collapse-${rowKey}`}>
          <TableCell className={styles.collapsibleCell} colSpan={100}>
            <Collapse
              className={styles.styledCollapse}
              collapsed={collapsed}
              style={style}
            >
              {children}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
