import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BoxesSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M15 12C13.8954 12 13 12.8954 13 14V18C13 19.1046 13.8954 20 15 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12H18.5C18.2239 12 18 12.2239 18 12.5V14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14V12.5C16 12.2239 15.7761 12 15.5 12H15Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H9C10.1046 20 11 19.1046 11 18V14C11 12.8954 10.1046 12 9 12H8.5C8.22386 12 8 12.2239 8 12.5V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V12.5C6 12.2239 5.77614 12 5.5 12H5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C8.89543 2 8 2.89543 8 4V8C8 9.10457 8.89543 10 10 10H14C15.1046 10 16 9.10457 16 8V4C16 2.89543 15.1046 2 14 2H13.5C13.2239 2 13 2.22386 13 2.5V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2.5C11 2.22386 10.7761 2 10.5 2H10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
