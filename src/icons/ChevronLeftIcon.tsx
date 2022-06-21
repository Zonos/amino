import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronLeftIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.364 5.707a1 1 0 0 0-1.414 0l-5.657 5.657a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
