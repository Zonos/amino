import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const CheckIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M2.5 7.5L6 12l7-7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
