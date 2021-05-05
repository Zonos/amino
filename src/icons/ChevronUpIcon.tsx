import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const ChevronUpIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M3 10l5-5 5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
