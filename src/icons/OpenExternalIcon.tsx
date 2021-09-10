import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const OpenExternalIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.8128 5.23224v4.46447m0-4.46447H6.34833m4.46447 0L5.23221 10.8128"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconBase>
);
