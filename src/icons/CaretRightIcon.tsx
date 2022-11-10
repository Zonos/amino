import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CaretRightIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        className={className}
        viewBox="0 0 24 24"
      >
        <path
          d="M10.62 18.076c-1.1.962-2.82.181-2.82-1.28V7.205c0-1.46 1.72-2.24 2.82-1.279l5.48 4.796a1.7 1.7 0 0 1 0 2.56l-5.48 4.795Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
