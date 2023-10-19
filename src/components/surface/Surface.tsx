import type { ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { Depth } from 'src/types/Depth';

const SurfaceBase = styled.div<{ $dense: boolean }>`
  background: ${theme.surfaceColor};
  padding: ${theme.space24};
  color: ${theme.textColor};
  border-radius: ${p => (p.$dense ? theme.radius6 : theme.radius8)};
`;

// shadow small
const Depth4 = styled(SurfaceBase)`
  box-shadow: ${theme.v3ShadowBase};
  border: ${theme.border};
`;

// shadow medium
const Depth8 = styled(SurfaceBase)`
  box-shadow: ${theme.v3ShadowMedium};
`;

const Depth16 = styled(SurfaceBase)`
  box-shadow: ${theme.v3ShadowLarge};
`;

// shadow xl
const Depth64 = styled(SurfaceBase)`
  box-shadow: ${theme.v3ShadowXl};
`;

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * @default false
   */
  dense?: boolean;
  depth?: Depth;
};

export const Surface = ({
  children,
  className,
  dense = false,
  depth,
}: Props) => {
  const classes = [className || '', 'elevated'].join(' ');

  switch (depth) {
    case 'depth64':
      return (
        <Depth64 $dense={dense} className={classes}>
          {children}
        </Depth64>
      );
    case 'depth16':
      return (
        <Depth16 $dense={dense} className={classes}>
          {children}
        </Depth16>
      );
    case 'depth8':
      return (
        <Depth8 $dense={dense} className={classes}>
          {children}
        </Depth8>
      );
    case 'depth4':
    default:
      return (
        <Depth4 $dense={dense} className={classes}>
          {children}
        </Depth4>
      );
  }
};
