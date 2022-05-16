import React from 'react';

import styled from 'styled-components';

import { GridAlignment, GridSpacing } from './GridSpacing';

export type VStackProps = {
  alignment?: GridAlignment;
  spacing?: GridSpacing;
  children: React.ReactNode;
};
/**
 * A vertical stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const VStack = styled.div<VStackProps>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${p =>
    p.spacing ? `var(--amino-${p.spacing})` : `var(--amino-space)`};

  & > * {
    justify-self: ${p => (p.alignment === 'end' ? 'end' : 'unset')};
  }
`;
