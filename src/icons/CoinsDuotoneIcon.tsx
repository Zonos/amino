import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CoinsDuotoneIcon = forwardRef<
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
        d="M8 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
        fill="currentColor"
      />
      <path
        d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
});
