import styled from 'styled-components';

import { GridAlignment, GridSpacing } from './GridSpacing';

/**
 * A vertical stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const VStack = styled.div<{
  alignment?: GridAlignment;
  spacing?: GridSpacing;
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(--amino-space)`};

  & > * {
    justify-self: ${p => (p.alignment === 'end' ? 'end' : 'unset')};
  }
`;
