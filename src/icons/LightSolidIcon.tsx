import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LightSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 20.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-.5Zm7-3.57a8 8 0 1 0-8 0V17a1 1 0 0 0 1 1h1.5a.5.5 0 0 0 .5-.5v-4.086l-1.707-1.707a1 1 0 1 1 1.414-1.414L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13 13.414V17.5a.5.5 0 0 0 .5.5H15a1 1 0 0 0 1-1v-.07Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
