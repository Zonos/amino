import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleDuotoneIcon = forwardRef<
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.293 9.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3Z"
      clipRule="evenodd"
    />
  </IconBase>
));
