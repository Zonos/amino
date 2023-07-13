import type { MouseEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

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
  onClick?: MouseEventHandler<HTMLTableRowElement>;
  withHover?: boolean;
};

export function TableRow({
  active,
  children,
  className,
  onClick,
  withHover,
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
