import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const DutiesIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect
      opacity=".5"
      x="10.0581"
      y="9.55807"
      width="5.03226"
      height="5.03226"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.17914 2c.3849-.66667 1.34715-.66667 1.73205 0l1.75441 3.03871c.3849.66667-.0962 1.5-.86604 1.5h-3.5088c-.7698 0-1.25092-.83333-.86602-1.5L7.17914 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      opacity=".5"
      cx="3.51613"
      cy="12.0742"
      r="2.51613"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
