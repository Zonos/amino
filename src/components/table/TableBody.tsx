import React, { ReactNode } from 'react';

export type TableBodyProps = {
  children: ReactNode;
  className?: string;
};

export const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={className}>{children}</tbody>;
};
