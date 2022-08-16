import React, { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

type StyledProps = {
  align?: 'center' | 'justify' | 'left' | 'right';
  borderBottom?: string;
  padding?: string;
};

const defaultPadding = css`
  padding: 0;
  &:first-of-type {
    padding-left: ${theme.spaceHalf};
  }
  &:last-of-type {
    padding-right: ${theme.spaceHalf};
  }
`;

const paddingCss = css<StyledProps>`
  ${p =>
    p.padding
      ? css`
          padding: ${p.padding};
        `
      : defaultPadding}
`;

const StyledTableCell = styled.td<StyledProps>`
  font-variant-numeric: tabular-nums;
  text-align: ${p => p.align};
  border-bottom: ${p => p.borderBottom || `1px solid ${theme.grayL80}`};

  .Amino-table-size-medium & {
    height: 64px;
  }
  .Amino-table-size-small & {
    height: 48px;
  }
  ${paddingCss}
`;

const InlineWrapper = styled.div<StyledProps>`
  display: inline-block;
`;

export type TableCellProps = {
  children?: ReactNode;
  className?: string;
  colSpan?: number;
  tag?: 'td' | 'th';
} & StyledProps;

export const TableCell = ({
  align = 'left',
  borderBottom,
  children,
  colSpan,
  className,
  padding,
  tag,
}: TableCellProps) => {
  return (
    <StyledTableCell
      as={tag}
      align={align}
      borderBottom={borderBottom}
      className={className}
      colSpan={colSpan}
      padding={padding}
    >
      <InlineWrapper>{children}</InlineWrapper>
    </StyledTableCell>
  );
};
