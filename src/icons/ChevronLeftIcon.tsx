import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const ChevronLeftIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M10 4L5 8.5l5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
