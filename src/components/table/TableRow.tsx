import type { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './TableRow.module.scss';

export type TableRowProps = BaseProps & {
  active?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
  withHover?: boolean;
};

export function TableRow({
  active,
  children,
  className,
  onClick,
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
      onClick={onClick}
      style={style}
    >
      {children}
    </tr>
  );
}
