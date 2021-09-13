import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const DownloadIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8 10L5 7.2M8 10l3-2.8M8 10V3M4.75 13.25h6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
