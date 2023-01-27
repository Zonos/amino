import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

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
