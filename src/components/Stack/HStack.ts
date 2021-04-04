import styled from "styled-components";

import { GridAlignment, GridSpacing } from ".";

export type HStackProps = {
  alignment?: GridAlignment;
  spacing?: GridSpacing;
};

/**
 * A horizontal stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const HStack = styled.div<HStackProps>`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  column-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(--amino-space)`};
  grid-auto-flow: column;

  & > * {
    justify-self: ${p => p.alignment || "unset"};
  }
`;
