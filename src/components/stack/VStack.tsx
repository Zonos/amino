import React from 'react';

import styled from 'styled-components';

import { Stack, StackProps } from './Stack';

const StyledVStack = styled(Stack)<StackProps>`
  grid-row-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(--amino-space)`};
  grid-auto-flow: row;
`;

/**
 * A vertical stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const VStack = ({ children, ...props }: StackProps) => {
  return <StyledVStack {...props}>{children}</StyledVStack>;
};
