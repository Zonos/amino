import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const CartIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M2 2h2.12862l2.15709 8h5.99999L14 4.66667H5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="1" fill="currentColor" />
    <circle cx="6.5" cy="13" r="1" fill="currentColor" />
  </IconBase>
);
