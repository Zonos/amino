import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BagIcon = ({ size, color, className }: IconProps) => {
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
        d="M3.025 11.45A4 4 0 0 1 6.999 7h10.002a4 4 0 0 1 3.974 4.45l-.68 6A4 4 0 0 1 16.321 21H7.679a4 4 0 0 1-3.974-3.55l-.68-6ZM6.999 9a2 2 0 0 0-1.987 2.225l.68 6A2 2 0 0 0 7.679 19h8.642a2 2 0 0 0 1.987-1.775l.68-6A2 2 0 0 0 17.001 9H6.999Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0V7a2 2 0 0 0-4 0v3a1 1 0 0 1-2 0V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
