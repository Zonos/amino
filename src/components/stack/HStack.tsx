import { theme } from 'src/styles/constants/theme';
import type { GridSpacing } from 'src/types';
import styled from 'styled-components';

import { type StackProps, Stack } from './Stack';

const StyledHStack = styled(Stack)<{ $spacing: GridSpacing }>`
  grid-column-gap: ${p => theme[`space${p.$spacing}`]};
  grid-auto-flow: column;
`;

/**
 * A horizontal stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const HStack = ({ children, spacing = 24, ...props }: StackProps) => (
  <StyledHStack $spacing={spacing} {...props}>
    {children}
  </StyledHStack>
);
