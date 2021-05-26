import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const EmailIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect
      x="2"
      y="4"
      width="12"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M13.5 4.5L8.53688 7.65835c-.32757.20845-.74619.20845-1.07376 0L2.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </IconBase>
);
