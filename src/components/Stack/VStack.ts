import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { GridAlignment, GridSpacing } from ".";

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
    p.spacing ? `var(--amino-${p.spacing})` : `var(${AminoTheme.space})`};

  & > * {
    justify-self: ${p => (p.alignment === "end" ? "end" : "unset")};
  }
`;
