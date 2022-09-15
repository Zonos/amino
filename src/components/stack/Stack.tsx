import React from 'react';

import styled from 'styled-components';

import { GridAlignment, GridSpacing } from './GridSpacing';

type DivProps = Omit<
  Partial<HTMLDivElement>,
  | 'translate'
  | 'style'
  | 'prefix'
  | 'contentEditable'
  | 'inputMode'
  | 'children'
>;

export interface StackProps extends DivProps {
  alignment?: GridAlignment;
  spacing?: GridSpacing;
  children: React.ReactNode;
}
/**
 * A stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
const StyledStack = styled.div<StackProps>`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  & > * {
    justify-self: ${p => p.alignment || 'unset'};
  }
`;
export const Stack = ({ children, ...otherProps }: StackProps) => {
  return <StyledStack {...otherProps}>{children}</StyledStack>;
};
