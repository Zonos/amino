import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BagSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M3.015 11.303A3 3 0 0 1 6 8h2v2a1 1 0 1 0 2 0V8h4v2a1 1 0 1 0 2 0V8h2a3 3 0 0 1 2.984 3.303l-.71 7A3 3 0 0 1 17.289 21H6.711a3 3 0 0 1-2.985-2.697l-.71-7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7a4 4 0 1 1 8 0v1h-2V7a2 2 0 1 0-4 0v1H8V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
