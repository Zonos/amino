import React, { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

const StyledList = styled.section<ListProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${({ withBorder }) =>
    withBorder &&
    css`
      padding: ${theme.spaceQuarter};
      border: 1px solid ${theme.grayL60};
      border-radius: ${theme.radiusXl};
    `}

  ${({ withNegativeMargin }) =>
    withNegativeMargin &&
    css`
      margin: ${theme.spaceNegative};
    `}
`;

export type ListProps = {
  className?: string;
  withBorder?: boolean;
  withNegativeMargin?: boolean;
  children?: ReactNode;
};

export const List = ({
  className,
  withBorder,
  withNegativeMargin,
  children,
}: ListProps) => (
  <StyledList
    className={className}
    withBorder={withBorder}
    withNegativeMargin={withNegativeMargin}
  >
    {children}
  </StyledList>
);
