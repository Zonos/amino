import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const BoxIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M1.5 4l6.08094-2.80659c.2659-.12272.57222-.12272.83812 0L14.5 4m-13 0L8 7M1.5 4v7.3602c0 .39.22679.7445.58094.9079L8 15m0-8l6.5-3M8 7v8m6.5-11v7.3602c0 .39-.2268.7445-.5809.9079L8 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
