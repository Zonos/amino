import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CoinsDuotoneIcon = ({
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
        d="M8 9.5C8 13.0899 10.9101 16 14.5 16C18.0899 16 21 13.0899 21 9.5C21 5.91015 18.0899 3 14.5 3C10.9101 3 8 5.91015 8 9.5Z"
        fill="currentColor"
      />
      <path
        d="M3 14.5C3 18.0899 5.91015 21 9.5 21C13.0899 21 16 18.0899 16 14.5C16 10.9101 13.0899 8 9.5 8C5.91015 8 3 10.9101 3 14.5Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
