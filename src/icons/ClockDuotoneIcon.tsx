import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ClockDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
      data-is-secondary-color="true"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 6a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
