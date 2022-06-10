import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ClockDuotoneIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C12.5523 6 13 6.44772 13 7V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H12C11.4477 13 11 12.5523 11 12V7C11 6.44772 11.4477 6 12 6Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
