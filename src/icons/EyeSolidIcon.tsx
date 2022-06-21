import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EyeSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M2.27 10.74C3.14 8.788 5.892 4 12 4c6.11 0 8.861 4.788 9.73 6.74a3.088 3.088 0 0 1 0 2.52C20.861 15.212 18.11 20 12 20c-6.108 0-8.86-4.788-9.73-6.74a3.088 3.088 0 0 1 0-2.52ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="currentColor"
      />
      <path
        d="M10.5 12a1.5 1.5 0 0 0 1.415-1.998L12 10a2 2 0 1 1-1.998 1.915A1.5 1.5 0 0 0 10.5 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
