import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M18.02 15.364a1 1 0 0 0 0-1.414l-5.656-5.657a1 1 0 0 0-1.414 0L5.293 13.95a1 1 0 0 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
