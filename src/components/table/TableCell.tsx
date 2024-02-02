import type { ReactNode } from 'react';

import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './TableCell.module.scss';

export type TableCellProps = BaseProps & {
  align?: 'center' | 'justify' | 'left' | 'right';
  borderBottom?: string;
  children?: ReactNode;
  colSpan?: number;
  padding?: string;
  tag?: 'td' | 'th';
};

export const TableCell = ({
  align = 'left',
  borderBottom,
  children,
  className,
  colSpan,
  padding,
  style,
  tag,
}: TableCellProps) => {
  const tableProps = {
    align,
    className: clsx(
      className,
      styles.styledTableCell,
      !padding && styles.defaultPadding,
    ),
    colSpan,
    style: {
      ...style,
      '--amino-table-cell-align': align,
      '--amino-table-cell-border-bottom':
        borderBottom || `1px solid ${theme.gray200}`,
      '--amino-table-cell-padding': padding || '',
    },
  };

  const innerWrapper = <div className={styles.inlineWrapper}>{children}</div>;

  return tag === 'th' ? (
    <th {...tableProps}>{innerWrapper}</th>
  ) : (
    <td {...tableProps}>{innerWrapper}</td>
  );
};
