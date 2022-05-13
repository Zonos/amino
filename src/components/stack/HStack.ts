import styled from 'styled-components';

import { Stack, StackProps } from './Stack';

/**
 * A vertical stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const HStack = styled(Stack)<StackProps>`
  grid-column-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(--amino-space)`};
  grid-auto-flow: column;
`;
