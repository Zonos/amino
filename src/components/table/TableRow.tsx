import { ReactNode } from 'react';

export type TableRowProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const TableRow = ({ children, className, onClick }: TableRowProps) => (
  <tr className={className} onClick={onClick}>
    {children}
  </tr>
);
