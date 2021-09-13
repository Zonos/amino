import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const ClockIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 5v4h3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
