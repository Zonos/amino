import type { ReactNode } from 'react';

export type TableFooterProps = {
  children: ReactNode;
  className?: string;
};

export const TableFooter = ({ children, className }: TableFooterProps) => (
  <tfoot className={className}>{children}</tfoot>
);
