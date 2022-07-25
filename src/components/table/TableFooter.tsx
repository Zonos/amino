import React, { ReactNode } from 'react';

export type TableFooterProps = {
  children: ReactNode;
  className?: string;
};

export const TableFooter = ({ children, className }: TableFooterProps) => {
  return <tfoot className={className}>{children}</tfoot>;
};
