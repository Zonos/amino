import React, { forwardRef } from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const CheckIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color }, ref) => (
    <IconBase size={size} color={color} ref={ref}>
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
