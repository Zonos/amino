import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LightDuotoneIcon = forwardRef<
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
        d="M16 16.93a8 8 0 1 0-8 0V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.07Z"
        fill="currentColor"
      />
      <path
        d="M9 19h6v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1Zm1.707-8.707a1 1 0 1 0-1.414 1.414L11 13.414V19h2v-5.586l1.707-1.707a1 1 0 0 0-1.414-1.414L12 11.586l-1.293-1.293Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
});
