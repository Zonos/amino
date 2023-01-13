import { MouseEventHandler, ReactNode } from 'react';

export type TableRowProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
};

export function TableRow({ children, className, onClick }: TableRowProps) {
  return (
    <tr className={className} onClick={onClick}>
      {children}
    </tr>
  );
}
