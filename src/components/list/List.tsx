import styled, { css } from 'styled-components';

export interface ListProps {
  withBorder?: boolean;
  withNegativeMargin?: boolean;
}

export const List = styled.section<ListProps>`
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
