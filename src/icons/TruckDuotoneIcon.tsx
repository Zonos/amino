import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TruckDuotoneIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3h3.225a3 3 0 0 1 2.021.783l2.775 2.53A3 3 0 0 1 22 12.53V15a3.001 3.001 0 0 1-2.128 2.872A3.001 3.001 0 0 1 14.17 18H9.829a3.001 3.001 0 0 1-5.7-.128A3.001 3.001 0 0 1 2 15V7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
