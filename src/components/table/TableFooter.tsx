import type { ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';

export type TableFooterProps = BaseProps & {
  children: ReactNode;
};

export const TableFooter = ({
  children,
  className,
  style,
}: TableFooterProps) => (
  <tfoot className={className} style={style}>
    {children}
  </tfoot>
);
