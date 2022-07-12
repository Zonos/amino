import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowSwapDuotoneIcon = forwardRef<
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
        d="M16.586 5.707A1 1 0 0 1 18 4.293L21.707 8a1 1 0 0 1 0 1.414L18 13.121a1 1 0 0 1-1.414-1.414l2-2H11a1 1 0 1 1 0-2h7.586l-2-2Z"
        fill="currentColor"
      />
      <path
        d="M7.414 17.707A1 1 0 1 1 6 19.121l-3.707-3.707a1 1 0 0 1 0-1.414L6 10.293a1 1 0 1 1 1.414 1.414l-2 2H13a1 1 0 1 1 0 2H5.414l2 2Z"
        fill={secondaryColor || '#CACACE'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
});
