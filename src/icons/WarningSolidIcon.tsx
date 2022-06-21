import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const WarningSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M14.683 4.66c-1.105-2.212-4.261-2.212-5.367 0L3.32 16.659C2.322 18.654 3.773 21 6.003 21h11.994c2.23 0 3.68-2.346 2.683-4.341l-5.997-12ZM11 9a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0V9Zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
