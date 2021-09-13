import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const CreditCardIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect
      x="1.5"
      y="3"
      width="13"
      height="10"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path stroke="currentColor" strokeWidth="1.5" d="M14 6.75H1" />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.75 9.75h-2.5"
    />
  </IconBase>
);
