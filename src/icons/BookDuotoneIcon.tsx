import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M2 6.604v9.661a2 2 0 0 0 2.22 1.988l.826-.091a10.002 10.002 0 0 1 2.893.1L12 19V5l-3.513-.639a10 10 0 0 0-3.958.077l-.963.214A2 2 0 0 0 2 6.604Z"
        fill="#3D3D42"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.58 19.48 2.42.88 2.42-.88a9.015 9.015 0 0 1 6.16 0A1.803 1.803 0 0 0 23 17.785V5.76a2 2 0 0 0-1.317-1.88l-.766-.278a10 10 0 0 0-6.834 0L12 4.36l-2.083-.757a10 10 0 0 0-6.834 0l-.766.279A2 2 0 0 0 1 5.76v12.024a1.803 1.803 0 0 0 2.42 1.695 9.015 9.015 0 0 1 6.16 0ZM11 6.124l-1.766-.642a8 8 0 0 0-5.468 0l-.108.039A1 1 0 0 0 3 6.46v9.657c0 .683.672 1.166 1.342 1.032a11.015 11.015 0 0 1 5.922.45l.736.268V6.124Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
