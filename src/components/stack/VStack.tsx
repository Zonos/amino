import { theme } from 'src/styles/constants/theme';
import type { GridSpacing } from 'src/types';
import styled from 'styled-components';

import { type StackProps, Stack } from './Stack';

const StyledVStack = styled(Stack)<{ $spacing: GridSpacing }>`
  grid-row-gap: ${p => theme[`space${p.$spacing}`]};
  grid-auto-flow: row;
`;

/**
 * A vertical stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const VStack = ({ children, spacing = 24, ...props }: StackProps) => (
  <StyledVStack $spacing={spacing} {...props}>
    {children}
  </StyledVStack>
);
