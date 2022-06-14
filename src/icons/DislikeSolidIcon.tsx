import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DislikeSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <rect
        x="20"
        y="15"
        width="2"
        height="11"
        rx="1"
        transform="rotate(-180 20 15)"
        fill="currentColor"
      />
      <path
        d="M13.62 19.597a1.028 1.028 0 0 1-.818.403h-2.153a1.01 1.01 0 0 1-1.02-1v-2.364c0-.552-.458-1-1.021-1H6.042c-1.228 0-2.177-1.053-2.026-2.246l.967-7.636C5.11 4.752 5.98 4 7.01 4h7.95C16.086 4 17 4.895 17 6v7.693c0 .325-.04.648-.12.963l-.05.2c-.131.515-.365 1-.689 1.425l-2.52 3.316Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
