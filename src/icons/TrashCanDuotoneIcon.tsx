import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TrashCanDuotoneIcon = ({
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
        d="M19 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8Z"
        fill="currentColor"
      />
      <path
        d="M10 12C9.44772 12 9 12.4477 9 13V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V13C11 12.4477 10.5523 12 10 12Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M14 12C13.4477 12 13 12.4477 13 13V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V13C15 12.4477 14.5523 12 14 12Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H8ZM10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V6H10V5Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
