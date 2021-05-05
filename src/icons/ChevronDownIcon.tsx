import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const ChevronDownIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M13 6l-5 5-5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
