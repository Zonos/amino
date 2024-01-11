import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Table.module.scss';

export type TableProps = BaseProps & {
  children: ReactNode;
  size?: 'medium' | 'small';
};

export const Table = ({
  children,
  className,
  size = 'medium',
  style,
}: TableProps) => (
  <table
    className={clsx(className, styles.styledTable, `Amino-table-size-${size}`)}
    style={style}
  >
    {children}
  </table>
);
