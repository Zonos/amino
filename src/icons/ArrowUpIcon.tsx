import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const ArrowUpIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8 3l4 4M8 3L4 7m4-4v10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
