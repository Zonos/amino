import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HelloIcon = ({ size, color, className }: IconProps) => {
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
        d="m18.465 11.293-5.758-5.757a1 1 0 0 0-1.414 0l-5.757 5.757a1 1 0 0 0 0 1.414l5.757 5.758a1 1 0 0 0 1.414 0l5.758-5.758a1 1 0 0 0 0-1.414ZM14.12 4.12a3 3 0 0 0-4.242 0L4.12 9.88a3 3 0 0 0 0 4.242l5.76 5.758a3 3 0 0 0 4.242 0l5.758-5.758a3 3 0 0 0 0-4.242l-5.76-5.76Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
