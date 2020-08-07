import styled from "styled-components";
import React from "react";

import { AminoTheme } from "../styles/AminoTheme";
import { Depth } from "./Depth";

const SurfaceBase = styled.div<any>`
  background: var(${AminoTheme.surfaceColor});
  padding: var(${AminoTheme.space});
  border-radius: ${p =>
    p.dense ? `var(${AminoTheme.radius})` : `var(${AminoTheme.radiusLg})`};
`;

// shadow small
const Depth4 = styled(SurfaceBase)`
  box-shadow: var(${AminoTheme.shadowSmall});

  border: 1px solid var(--amino-border-color);
`;

// shadow medium
const Depth8 = styled(SurfaceBase)`
  box-shadow: var(${AminoTheme.shadowBase});
`;

const Depth16 = styled(SurfaceBase)`
  box-shadow: var(${AminoTheme.shadowMedium});
`;

// shadow xl
const Depth64 = styled(SurfaceBase)`
  box-shadow: var(${AminoTheme.shadowLarge});
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
  depth
}) => {
  switch (depth) {
    case Depth.depth64:
      return (
        <Depth64 dense={dense} className={className || ""}>
          {children}
        </Depth64>
      );
    case Depth.depth16:
      return (
        <Depth16 dense={dense} className={className || ""}>
          {children}
        </Depth16>
      );
    case Depth.depth8:
      return (
        <Depth8 dense={dense} className={className || ""}>
          {children}
        </Depth8>
      );
    case Depth.depth4:
    default:
      return (
        <Depth4 dense={dense} className={className || ""}>
          {children}
        </Depth4>
      );
  }
};
