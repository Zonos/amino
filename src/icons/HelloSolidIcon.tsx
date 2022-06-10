import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HelloSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <rect
        x="12"
        y="2"
        width="14.1422"
        height="14.1422"
        rx="3"
        transform="rotate(45 12 2)"
        fill="#3D3D42"
      />
    </IconBase>
  );
};
