import { ReactNode } from 'react';

export type TableBodyProps = {
  children: ReactNode;
  className?: string;
};

export const TableBody = ({ children, className }: TableBodyProps) => (
  <tbody className={className}>{children}</tbody>
);
