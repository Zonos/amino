import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const BellDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M10 20h4a2 2 0 1 1-4 0Z" fill="currentColor" />
      <path
        d="M13.004 4h-2.009l-1.026.37A6 6 0 0 0 6 10.014v3.32c0 .734-.345 1.425-.932 1.866C3.021 16.741 4.11 20 6.671 20h10.657c2.562 0 3.65-3.26 1.603-4.799A2.334 2.334 0 0 1 18 13.335v-3.32a6 6 0 0 0-3.97-5.646L13.005 4Z"
        fill={secondaryColor || '#CACACE'}
        data-is-secondary-color="true"
      />
      <path d="M11 3a1 1 0 1 1 2 0v1h-2V3Z" fill="currentColor" />
    </IconBase>
  );
});
