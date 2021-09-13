import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

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
