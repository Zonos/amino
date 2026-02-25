import type { MouseEventHandler, ReactNode } from 'react';

import { Button } from 'src/components/button/Button';
import { Collapse } from 'src/components/collapse/Collapse';
import { TableCell } from 'src/components/table/TableCell';
import { TableRow } from 'src/components/table/TableRow';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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
        className={cn(
          !collapsed && '[&_td]:border-b-0',
          collapsible && 'cursor-pointer',
          className,
        )}
        onClick={e => collapsible && onToggleCollapse(e)}
        rowTestId={`amino--row-${rowKey}`}
        withHover={collapsible}
      >
        {rowContent}
        <TableCell align="right">
          {collapsible && (
            <Button
              className={cn(
                '[&_svg]:transition-amino',
                collapsed && '[&_svg]:rotate-180',
              )}
              icon={<ChevronUpIcon />}
              variant="plain"
            />
          )}
        </TableCell>
      </TableRow>
      {collapsible && (
        <TableRow rowTestId={`amino--collapse-${rowKey}`}>
          <TableCell
            className={cn(
              '!border-b-[inherit] !h-[inherit]',
              collapsed && '!h-0 !border-b-0',
              '[&>div]:w-full',
            )}
            colSpan={100}
          >
            <Collapse
              className="[&>div]:pb-4"
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
