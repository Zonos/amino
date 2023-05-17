import type { HTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

import type { GridAlignment, GridSpacing } from './GridSpacing';

type DivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  | 'translate'
  | 'style'
  | 'prefix'
  | 'contentEditable'
  | 'inputMode'
  | 'children'
>;

export interface StackProps extends DivProps {
  /** @default 'unset' */
  alignment?: GridAlignment;
  /** @default 24 */
  spacing?: GridSpacing;
  children: ReactNode;
}
/**
 * A stack
 *
 * @param alignment - Optional alignment
 */
const StyledStack = styled.div<{ $alignment?: GridAlignment }>`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  & > * {
    justify-self: ${p => p.$alignment || 'unset'};
  }
`;

export const Stack = ({ children, alignment, ...otherProps }: StackProps) => (
  <StyledStack $alignment={alignment} {...otherProps}>
    {children}
  </StyledStack>
);
