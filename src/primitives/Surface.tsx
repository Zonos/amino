import styled from "styled-components";
import React from "react";

import { Depth } from "./Depth";

const SurfaceBase = styled.div`
  background: var(--amino-surface-color);
  padding: var(--amino-space);
  border-radius: var(--amino-radius-large);
`;

// shadow small
const Depth4 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-medium);
`;

// shadow medium
const Depth8 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-medium);
`;

const Depth16 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-large);
`;

// shadow xl
const Depth64 = styled(SurfaceBase)`
  box-shadow: var(--amino-shadow-larger);
`;

type Props = {
  className?: string;
  depth?: Depth;
};

export const Surface: React.FC<Props> = ({ children, className, depth }) => {
  switch (depth) {
    case Depth.depth64:
      return <Depth64 className={className || ""}>{children}</Depth64>;
    case Depth.depth16:
      return <Depth16 className={className || ""}>{children}</Depth16>;
    case Depth.depth8:
      return <Depth8 className={className || ""}>{children}</Depth8>;
    case Depth.depth4:
    default:
      return <Depth4 className={className || ""}>{children}</Depth4>;
  }
};

