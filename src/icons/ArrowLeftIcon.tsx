import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const ArrowLeftIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M3 8l4-4M3 8l4 4M3 8h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
