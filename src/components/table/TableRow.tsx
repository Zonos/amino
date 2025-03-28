import type { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './TableRow.module.scss';

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
      className={clsx(
        className,
        styles.styledTableRow,
        active && styles.active,
        withHover && styles.withHover,
      )}
      data-testid={rowTestId}
      onClick={onClick}
      style={style}
    >
      {children}
    </tr>
  );
}
