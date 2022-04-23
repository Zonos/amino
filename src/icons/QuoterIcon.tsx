import React from 'react';

import { type IconProps } from '~/src/types';

import { IconBase } from './IconBase';

export const QuoterIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z"
      fill="currentColor"
    />
  </IconBase>
);

export const QuoterSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
  </IconBase>
);

export const QuoterDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z"
      fill="#3D3D40"
    />
  </IconBase>
);
