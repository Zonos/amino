import type { MouseEventHandler, ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  &.with-hover:hover {
    background-color: ${theme.gray50};
  }
  th {
    color: ${theme.gray800};
    text-transform: uppercase;
    & > * {
      font-size: ${theme.fontSizeS};
    }
  }
  /** Only affect on tr inside tbody */
  tbody &.active {
    background: ${theme.gray50};
  }
`;

export type TableRowProps = {
  active?: boolean;
  children: ReactNode;
  className?: string;
  withHover?: boolean;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
};

export function TableRow({
  active,
  children,
  className,
  withHover,
  onClick,
}: TableRowProps) {
  return (
    <StyledTableRow
      className={[
        className || '',
        active ? 'active' : '',
        withHover ? 'with-hover' : '',
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </StyledTableRow>
  );
}
