import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ExclamationMarkDuotoneIcon = ({
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
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
