import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const CopyIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <rect
        x="3"
        y="2"
        width="10"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 2h4v2c0 .55228-.44772 1-1 1H7c-.55228 0-1-.44772-1-1V2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </IconBase>
  );
};
