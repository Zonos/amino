import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const DropdownIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M5 5.5l3-3 3 3M11 10.5l-3 3-3-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
