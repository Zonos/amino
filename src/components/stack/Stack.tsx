import type { HTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

import type { GridAlignment, GridSpacing } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';

type DivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  | 'translate'
  | 'style'
  | 'prefix'
  | 'contentEditable'
  | 'inputMode'
  | 'children'
>;

export type StackProps = {
  /** @default 'unset' */
  alignment?: GridAlignment;
  children: ReactNode;
  /** @default 24 */
  spacing?: GridSpacing;
} & DivProps &
  BaseProps;
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

export const Stack = ({ alignment, children, ...otherProps }: StackProps) => (
  <StyledStack $alignment={alignment} {...otherProps}>
    {children}
  </StyledStack>
);
