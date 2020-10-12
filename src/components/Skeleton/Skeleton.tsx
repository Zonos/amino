import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

/**
 * Displays a blocky outline of content that can be used as a loader
 *
 * @param width - Optional width in pixels
 * @param height - Optional height in em
 */
export const Skeleton = styled.div<{ width?: number; height?: number }>`
  height: ${p => (p.height ? `${p.height}px` : `1em`)};
  width: ${p => `${p.width}px` || "100%"};
  background: var(${AminoTheme.gray200});
  border-radius: var(${AminoTheme.radius});
  position: relative;
`;
