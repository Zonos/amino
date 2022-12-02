import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowDownDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15.707 13.879a1 1 0 0 1 1.415 1.414l-4.415 4.414a1 1 0 0 1-1.414 0l-4.414-4.414a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 1 1 2 0v11.586l2.707-2.707Z"
      />
    </IconBase>
  )
);
