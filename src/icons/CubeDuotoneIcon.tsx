import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CubeDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: string }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.361 2.44a2 2 0 0 1 1.777 0l7.25 3.596A2 2 0 0 1 21.5 7.827v8.578a2 2 0 0 1-1.111 1.792l-7.25 3.595a2 2 0 0 1-1.777 0l-7.25-3.595A2 2 0 0 1 3 16.405V7.827a2 2 0 0 1 1.112-1.791l7.25-3.595Z"
        fill="currentColor"
      />
      <path
        d="M11.25 11.911 6.096 9.355a1 1 0 1 1 .888-1.792l5.266 2.612 5.266-2.612a1 1 0 0 1 .889 1.792l-5.155 2.556v6.586a1 1 0 1 1-2 0v-6.586Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
});
