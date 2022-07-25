import React, { ReactNode } from 'react';

export type TableRowProps = {
  children: ReactNode;
  className?: string;
};

export const TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={className}>{children}</tr>;
};
