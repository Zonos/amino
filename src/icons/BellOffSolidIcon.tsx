import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellOffSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.062 20.495c-.068-.268.162-.495.438-.495h3c.276 0 .507.227.438.495a2 2 0 0 1-3.876 0ZM6.881 6.881a5.983 5.983 0 0 0-.88 3.128v1.326c0 .734-.346 1.425-.932 1.866C3.02 14.741 4.11 18 6.672 18h10.657c.212 0 .415-.023.606-.065L6.881 6.881ZM12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 0 2h1a4 4 0 0 1 4 4v1a1 1 0 1 0 2 0v-1a6.002 6.002 0 0 0-5-5.917V3a1 1 0 0 0-1-1Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
