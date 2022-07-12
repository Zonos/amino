import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

const StyledList = styled.section<ListProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${({ withBorder }) =>
    withBorder &&
    css`
      padding: var(--amino-space-quarter);
      border: 1px solid var(--amino-gray-l60);
      border-radius: var(--amino-radius-xl);
    `}

  ${({ withNegativeMargin }) =>
    withNegativeMargin &&
    css`
      margin: var(--amino-space-negative);
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
