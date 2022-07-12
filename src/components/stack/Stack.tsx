import React from 'react';

import styled from 'styled-components';

import { GridAlignment, GridSpacing } from './GridSpacing';

export type StackProps = {
  alignment?: GridAlignment;
  spacing?: GridSpacing;
  children: React.ReactNode;
  className?: string;
};

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

export const Stack = ({
  className,
  spacing,
  alignment,
  children,
}: StackProps) => {
  return (
    <StyledStack className={className} spacing={spacing} alignment={alignment}>
      {children}
    </StyledStack>
  );
};
