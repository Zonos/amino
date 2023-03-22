import { MouseEventHandler, ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  :hover {
    background-color: ${theme.gray100};
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
    background: ${theme.gray100};
  }
`;

export type TableRowProps = {
  active?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
};

export function TableRow({
  active,
  children,
  className,
  onClick,
}: TableRowProps) {
  return (
    <StyledTableRow
      className={[className || '', active ? 'active' : ''].join(' ')}
      onClick={onClick}
    >
      {children}
    </StyledTableRow>
  );
}
