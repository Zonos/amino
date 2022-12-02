import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelloSolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <rect
        width="14.142"
        height="14.142"
        x="12"
        y="2"
        fill="#3D3D42"
        rx="3"
        transform="rotate(45 12 2)"
      />
    </IconBase>
  )
);
