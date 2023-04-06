import { MouseEventHandler, ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  :not(.no-hover):hover {
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
  noHover?: boolean;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
};

export function TableRow({
  active,
  children,
  className,
  noHover,
  onClick,
}: TableRowProps) {
  return (
    <StyledTableRow
      className={[
        className || '',
        active ? 'active' : '',
        noHover ? 'no-hover' : '',
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </StyledTableRow>
  );
}
