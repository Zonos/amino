import React from 'react';

import styled from 'styled-components';

import { Stack, StackProps } from './Stack';

const StyledHStack = styled(Stack)<StackProps>`
  grid-column-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(--amino-space)`};
  grid-auto-flow: column;
`;

/**
 * A horizontal stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const HStack = ({ children, ...props }: StackProps) => {
  return <StyledHStack {...props}>{children}</StyledHStack>;
};
