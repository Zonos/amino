import React, { forwardRef, ReactNode } from 'react';

import { type IconProps } from '~/src/types/IconProps';

type Props = { children: ReactNode; viewBox?: string } & IconProps;

export const IconBase = forwardRef<SVGSVGElement, Props>(
  ({ size, color, viewBox, children }, ref) => {
    const viewBoxSize = size && size > 24 ? size + 2 : 23;
    return (
      <svg
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color && `var(--amino-${color})`}
        viewBox={viewBox || `0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        {children}
      </svg>
    );
  }
);
