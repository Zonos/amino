import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { GridAlignment, GridSpacing } from ".";

/**
 * A horizontal stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const HStack = styled.div<{
  alignment?: GridAlignment;
  spacing?: GridSpacing;
}>`
  display: grid;
  grid-auto-columns: auto;
  column-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(${AminoTheme.space})`};
  grid-auto-flow: column;

  & > * {
    justify-self: ${p => (p.alignment === "end" ? "end" : "unset")};
  }
`;
