import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BoxesIcon = ({ size, color, className }: IconProps) => {
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
        d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V10H18C19.6569 10 21 11.3431 21 13V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V13C3 11.3431 4.34315 10 6 10H7V5ZM9 10H15V5C15 4.44772 14.5523 4 14 4H13V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V4H10C9.44772 4 9 4.44772 9 5V10ZM7 12H6C5.44772 12 5 12.4477 5 13V17C5 17.5523 5.44772 18 6 18H11V12H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V12ZM13 12V18H18C18.5523 18 19 17.5523 19 17V13C19 12.4477 18.5523 12 18 12H17V13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13V12H13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
