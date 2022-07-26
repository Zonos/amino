import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const BagDuotoneIcon = forwardRef<
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
      <path
        d="M3.015 11.303A3 3 0 0 1 6 8h12a3 3 0 0 1 2.984 3.303l-.71 7A3 3 0 0 1 17.289 21H6.711a3 3 0 0 1-2.985-2.697l-.71-7Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7a4 4 0 1 1 8 0v3a1 1 0 1 1-2 0V7a2 2 0 1 0-4 0v3a1 1 0 1 1-2 0V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
