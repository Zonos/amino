import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BoxesDuotoneIcon = ({
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
        d="M10 2C8.89543 2 8 2.89543 8 4V8C8 9.10457 8.89543 10 10 10H14C15.1046 10 16 9.10457 16 8V4C16 2.89543 15.1046 2 14 2H10Z"
        fill="currentColor"
      />
      <path
        d="M3 14C3 12.8954 3.89543 12 5 12H9C10.1046 12 11 12.8954 11 14V18C11 19.1046 10.1046 20 9 20H5C3.89543 20 3 19.1046 3 18V14Z"
        fill="currentColor"
      />
      <path
        d="M13 14C13 12.8954 13.8954 12 15 12H19C20.1046 12 21 12.8954 21 14V18C21 19.1046 20.1046 20 19 20H15C13.8954 20 13 19.1046 13 18V14Z"
        fill="currentColor"
      />
      <path
        d="M11 2H13V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M6 12H8V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V12Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M18 12H16V14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14V12Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
