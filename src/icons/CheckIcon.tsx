import React, { forwardRef } from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

/** @deprecated Use CheckMarkIcon instead */
export const CheckIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase size={size} color={color} className={className} ref={ref}>
      <path
        d="M2.5 7.5L6 12l7-7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
);
