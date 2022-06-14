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
        d="M7 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1V5Zm2 5h6V5a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0V4h-1a1 1 0 0 0-1 1v5Zm-2 2H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v-6H9v1a1 1 0 1 1-2 0v-1Zm6 0v6h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0v-1h-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
