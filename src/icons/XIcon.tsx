import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const XIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M13 3L3 13M3 3l10 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
