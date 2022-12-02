import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.062 20.495c-.069-.268.162-.495.438-.495h3c.276 0 .506.227.438.495a2 2 0 0 1-3.877 0ZM13.004 4h-2.009l-1.031.371A5.992 5.992 0 0 0 6 10.01v1.326c0 .734-.345 1.425-.932 1.866C3.021 14.741 4.11 18 6.671 18h10.657c2.562 0 3.65-3.26 1.603-4.799A2.334 2.334 0 0 1 18 11.335V10.01a5.992 5.992 0 0 0-3.964-5.638L13.004 4ZM11 3a1 1 0 1 1 2 0v1h-2V3Z"
      />
    </IconBase>
  )
);
