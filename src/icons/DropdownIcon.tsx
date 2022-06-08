import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

/** @deprecated Use DoubleChevron instead */
export const DropdownIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M16.2782 10.2426C16.6687 9.85212 16.6687 9.21895 16.2782 8.82843L12.7427 5.29289C12.3521 4.90237 11.719 4.90237 11.3285 5.29289L7.79292 8.82843C7.40239 9.21895 7.40239 9.85212 7.79292 10.2426C8.18344 10.6332 8.81661 10.6332 9.20713 10.2426L12.0356 7.41421L14.864 10.2426C15.2545 10.6332 15.8877 10.6332 16.2782 10.2426Z"
      fill="currentColor"
    />
    <path
      d="M7.79289 13.6893C7.40237 14.0798 7.40237 14.713 7.79289 15.1035L11.3284 18.6391C11.719 19.0296 12.3521 19.0296 12.7426 18.6391L16.2782 15.1035C16.6687 14.713 16.6687 14.0798 16.2782 13.6893C15.8877 13.2988 15.2545 13.2988 14.864 13.6893L12.0355 16.5177L9.20711 13.6893C8.81658 13.2988 8.18342 13.2988 7.79289 13.6893Z"
      fill="currentColor"
    />
  </IconBase>
);
