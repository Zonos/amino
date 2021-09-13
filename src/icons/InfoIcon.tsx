import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const InfoIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11.5c.55228 0 1-.4477 1-1v-2c0-.55228-.44771-1-1-1-.55228 0-1 .44772-1 1v2c0 .5523.44772 1 1 1zm0-7c-.55228 0-1 .44772-1 1s.44772 1 1 1c.55229 0 1-.44772 1-1s-.44771-1-1-1z"
      fill="currentColor"
    />
  </IconBase>
);
