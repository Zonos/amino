import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HomeDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5907 3.39607C11.4582 2.86798 12.5418 2.86798 13.4093 3.39607L19.6701 7.20767C20.4952 7.70995 21 8.61463 21 9.5909V18.2207C21 19.7557 19.7737 21 18.2609 21H16.1739C14.6611 21 15.5 21 13.4348 21C12.2013 21 12.7924 21 12 21C11.2076 21 12 21 10.5907 20.9999C9.18146 20.9999 9.33887 21 7.82609 21H5.73913C4.22635 21 3 19.7557 3 18.2207V9.5909C3 8.61463 3.50482 7.70995 4.32986 7.20767L10.5907 3.39607Z"
        fill="currentColor"
      />
      <path
        d="M11 21H9V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V21H13H11Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
