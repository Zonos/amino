import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CoinsDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M8 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" fill="#CACACE" />
      <path
        d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
