import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const ChevronRightIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M5 4l5 4.5L5 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
