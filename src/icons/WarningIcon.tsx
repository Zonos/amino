import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const WarningIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <g clipPath="url(#clip0)">
      <path
        d="M7.13398 2c.3849-.66667 1.34715-.66667 1.73205 0l6.06217 10.5c.3849.6667-.0962 1.5-.866 1.5H1.93782c-.7698 0-1.250923-.8333-.86602-1.5L7.13398 2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5c-.55228 0-1 .44772-1 1v2c0 .55229.44772 1 1 1 .55229 0 1-.44771 1-1V6c0-.55228-.44771-1-1-1zm0 7c.55229 0 1-.4477 1-1s-.44771-1-1-1c-.55228 0-1 .4477-1 1s.44772 1 1 1z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
