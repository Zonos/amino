import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HomeDuotoneIcon = forwardRef<
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
        d="M10.59 3.396a2.705 2.705 0 0 1 2.82 0l6.26 3.812A2.788 2.788 0 0 1 21 9.59v8.63c0 1.536-1.226 2.78-2.74 2.78H5.74C4.226 21 3 19.756 3 18.22V9.59c0-.975.505-1.88 1.33-2.382l6.26-3.812Z"
        fill="currentColor"
      />
      <path
        d="M11 21H9v-5a3 3 0 1 1 6 0v5h-4Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
});
