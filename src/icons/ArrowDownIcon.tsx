import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

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
