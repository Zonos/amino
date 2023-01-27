import { FC } from 'react';

import { theme } from 'src/styles/constants/theme';
import { Depth } from 'src/types/Depth';
import styled from 'styled-components';

const SurfaceBase = styled.div<{ dense?: boolean }>`
  background: ${theme.surfaceColor};
  padding: ${theme.space24};
  color: ${theme.textColor};
  border-radius: ${p => (p.dense ? theme.radius6 : theme.radius8)};
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
  className?: string;
  depth?: Depth;
  dense?: boolean;
};

export const Surface: FC<Props> = ({ children, dense, className, depth }) => {
  switch (depth) {
    case 'depth64':
      return (
        <Depth64 dense={dense} className={className || ''}>
          {children}
        </Depth64>
      );
    case 'depth16':
      return (
        <Depth16 dense={dense} className={className || ''}>
          {children}
        </Depth16>
      );
    case 'depth8':
      return (
        <Depth8 dense={dense} className={className || ''}>
          {children}
        </Depth8>
      );
    case 'depth4':
    default:
      return (
        <Depth4 dense={dense} className={className || ''}>
          {children}
        </Depth4>
      );
  }
};
