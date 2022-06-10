import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HomeSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M13.4093 3.39607C12.5418 2.86798 11.4582 2.86798 10.5907 3.39607L4.32986 7.20767C3.50482 7.70995 3 8.61463 3 9.5909V18.2207C3 19.7557 4.22635 21 5.73913 21H7.82609C7.82609 21 7.89475 21 7.99987 21C8.55212 21 9 20.5523 9 20V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V20C15 20.5523 15.4477 21 16 21H18.2609C19.7737 21 21 19.7557 21 18.2207V9.5909C21 8.61463 20.4952 7.70995 19.6701 7.20767L13.4093 3.39607Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
