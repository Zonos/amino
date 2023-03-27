import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Stack, StackProps } from './Stack';

const StyledHStack = styled(Stack)<StackProps>`
  grid-column-gap: ${p =>
    p.spacing ? theme[`space${p.spacing}`] : theme.space24};
  grid-auto-flow: column;
`;

/**
 * A horizontal stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const HStack = ({ children, ...props }: StackProps) => (
  <StyledHStack {...props}>{children}</StyledHStack>
);
