import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PlayCircleDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="currentColor"
      />
      <path
        d="M9 9.00337C9 8.22674 9.84668 7.74653 10.5132 8.14512L15.5104 11.1334C16.1659 11.5254 16.1659 12.4751 15.5104 12.867L10.5132 15.8552C9.84666 16.2537 9 15.7735 9 14.9969V9.00337Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
