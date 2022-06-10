import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkIcon = ({ size, color, className }: IconProps) => {
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
        d="M4 7C4 4.23858 6.23858 2 9 2H14.9999C17.7614 2 19.9999 4.23858 19.9999 7V18.9892C19.9999 21.5429 17.0126 22.9289 15.0627 21.2799L12.6457 19.2358C12.273 18.9205 11.727 18.9205 11.3542 19.2358L8.93724 21.2799C6.98734 22.9289 4 21.543 4 18.9892V7ZM9 4C7.34315 4 6 5.34315 6 7V18.9892C6 19.8405 6.99578 20.3025 7.64575 19.7528L10.0628 17.7087C11.1811 16.7629 12.8189 16.7629 13.9372 17.7087L16.3542 19.7528C17.0042 20.3024 17.9999 19.8405 17.9999 18.9892V7C17.9999 5.34315 16.6568 4 14.9999 4H9Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
