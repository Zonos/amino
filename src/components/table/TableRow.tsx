import type { MouseEventHandler, ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type TableRowProps = BaseProps & {
  active?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
  /**
   * @param rowTestId
   * @default undefined
   * @note Only used for testing
   */
  rowTestId?: string;
  withHover?: boolean;
};

export function TableRow({
  active,
  children,
  className,
  onClick,
  rowTestId,
  style,
  withHover,
}: TableRowProps) {
  return (
    <tr
      className={cn(
        withHover && 'hover:bg-gray-50 dark:hover:bg-gray-100',
        '[&_th]:text-gray-800 [&_th_*]:text-amino-s dark:[&_th]:text-gray-600',
        active && '[tbody_&]:bg-gray-50 dark:[tbody_&]:bg-gray-100',
        className,
      )}
      data-testid={rowTestId}
      onClick={onClick}
      style={style}
    >
      {children}
    </tr>
  );
}
