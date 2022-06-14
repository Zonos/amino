import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const InfoDuotoneIcon = ({
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm1 5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
