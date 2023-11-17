import type { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

const StyledList = styled.section<ListProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${({ withBorder }) =>
    withBorder &&
    css`
      padding: ${theme.space8};
      border: 1px solid ${theme.gray200};
      border-radius: ${theme.radius12};
    `}

  ${({ withNegativeMargin }) =>
    withNegativeMargin &&
    css`
      margin: ${theme.spaceNegative24};
    `}
`;

export type ListProps = BaseProps & {
  children?: ReactNode;
  withBorder?: boolean;
  withNegativeMargin?: boolean;
};

export const List = ({
  children,
  className,
  withBorder,
  withNegativeMargin,
}: ListProps) => (
  <StyledList
    className={className}
    withBorder={withBorder}
    withNegativeMargin={withNegativeMargin}
  >
    {children}
  </StyledList>
);
