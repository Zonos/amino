import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TrashCanSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M5 10C5 8.89543 5.89543 8 7 8H17C18.1046 8 19 8.89543 19 10V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V10ZM9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V13ZM13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V13Z"
        fill="currentColor"
      />
      <path
        d="M10 2C8.89543 2 8 2.89543 8 4H5C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H19C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H16C16 2.89543 15.1046 2 14 2H10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
