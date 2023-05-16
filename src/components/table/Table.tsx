import type { ReactNode } from 'react';

import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
`;

export type TableProps = {
  children: ReactNode;
  className?: string;
  size?: 'medium' | 'small';
};

export const Table = ({ children, className, size = 'medium' }: TableProps) => (
  <StyledTable
    className={[className, `Amino-table-size-${size}`]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </StyledTable>
);
