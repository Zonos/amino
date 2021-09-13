import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const ArrowRightIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M13 8l-4 4m4-4L9 4m4 4H3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
