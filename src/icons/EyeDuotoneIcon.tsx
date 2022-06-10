import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EyeDuotoneIcon = ({
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
        d="M12.0005 4C5.89172 4 3.1396 8.78756 2.27027 10.7399C1.91186 11.5448 1.91186 12.4552 2.27027 13.2601C3.1396 15.2124 5.89172 20 12.0005 20C18.1094 20 20.8613 15.2122 21.7304 13.2599C22.0887 12.4552 22.0887 11.5448 21.7304 10.7401C20.8613 8.78782 18.1094 4 12.0005 4Z"
        fill="currentColor"
      />
      <path
        d="M10 12C11.1046 12 12 11.1046 12 10C12 9.64033 11.9051 9.30283 11.7389 9.01121C11.8249 9.00379 11.912 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 11.912 9.00379 11.8249 9.01121 11.7389C9.30283 11.9051 9.64033 12 10 12Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
