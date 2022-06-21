import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowLeftIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.121 15.707a1 1 0 0 1-1.414 1.414l-4.414-4.414a1 1 0 0 1 0-1.414l4.414-4.414a1 1 0 1 1 1.414 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l2.707 2.707Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
