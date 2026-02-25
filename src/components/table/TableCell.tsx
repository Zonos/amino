import type { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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
    className: cn(
      'text-0 tabular-nums',
      '[&>*]:text-amino-base',
      '[.Amino-table-size-medium_&]:h-14',
      '[.Amino-table-size-small_&]:h-12',
      !padding && 'p-0 first:pl-4 last:pr-4',
      className,
    ),
    colSpan,
    style: {
      ...style,
      borderBottom: borderBottom || theme.borderSubtle,
      padding: padding || undefined,
      textAlign: align,
    },
  };

  const innerWrapper = <div className="inline-block">{children}</div>;

  return tag === 'th' ? (
    <th {...tableProps}>{innerWrapper}</th>
  ) : (
    <td {...tableProps}>{innerWrapper}</td>
  );
};
