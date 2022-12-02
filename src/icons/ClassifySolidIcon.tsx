import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClassifySolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.104 3.53a1.023 1.023 0 0 1 1.792 0l8.964 15.882c.398.706-.1 1.588-.897 1.588H3.037c-.797 0-1.295-.882-.897-1.588l8.964-15.883Z"
      />
    </IconBase>
  )
);
