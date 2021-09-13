import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

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
