import React from 'react';

import styled from 'styled-components';

import { Depth } from '../../types';

const SurfaceBase = styled.div<{ dense?: boolean }>`
  background: var(--amino-surface-color);
  padding: var(--amino-space);
  color: var(--amino-text-color);
  border-radius: ${p =>
    p.dense ? `var(--amino-radius)` : `var(--amino-radius-lg)`};
`;

// shadow small
const Depth4 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-small);
  border: var(--amino-border);
`;

// shadow medium
const Depth8 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-base);
`;

const Depth16 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-medium);
`;

// shadow xl
const Depth64 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-large);
`;

type Props = {
  className?: string;
  depth?: Depth;
  dense?: boolean;
};

export const Surface: React.FC<Props> = ({
  children,
  dense,
  className,
  depth,
}) => {
  switch (depth) {
    case Depth.depth64:
      return (
        <Depth64 dense={dense} className={className || ''}>
          {children}
        </Depth64>
      );
    case Depth.depth16:
      return (
        <Depth16 dense={dense} className={className || ''}>
          {children}
        </Depth16>
      );
    case Depth.depth8:
      return (
        <Depth8 dense={dense} className={className || ''}>
          {children}
        </Depth8>
      );
    case Depth.depth4:
    default:
      return (
        <Depth4 dense={dense} className={className || ''}>
          {children}
        </Depth4>
      );
  }
};
