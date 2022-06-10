import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PauseCircleDuotoneIcon = ({
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
        d="M10 8C9.44772 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M14 8C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
