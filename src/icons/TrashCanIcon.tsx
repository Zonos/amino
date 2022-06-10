import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TrashCanIcon = ({ size, color, className }: IconProps) => {
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
        d="M7 8V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V8H19V18C19 20.2091 17.2091 22 15 22H9C6.79086 22 5 20.2091 5 18V8H7Z"
        fill="currentColor"
      />
      <path
        d="M10 11C9.44772 11 9 11.4477 9 12V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V12C11 11.4477 10.5523 11 10 11Z"
        fill="currentColor"
      />
      <path
        d="M14 11C13.4477 11 13 11.4477 13 12V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V12C15 11.4477 14.5523 11 14 11Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H8ZM10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V6H10V5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
