import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const ArrowDownIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8 13L4 9m4 4l4-4m-4 4V3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
