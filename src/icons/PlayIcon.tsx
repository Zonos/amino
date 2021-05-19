import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const PlayIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <g clipPath="url(#clip0)">
      <path
        d="M13.5 7.13398c.6667.3849.6667 1.34715 0 1.73205l-9 5.19617c-.66667.3849-1.5-.0962-1.5-.866V2.80385c0-.7698.83333-1.25093 1.5-.86603l9 5.19616z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
