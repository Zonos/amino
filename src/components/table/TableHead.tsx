import type { ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';

export type TableHeadProps = BaseProps & {
  children: ReactNode;
};

export const TableHead = ({ children, className, style }: TableHeadProps) => (
  <thead className={className} style={style}>
    {children}
  </thead>
);
