import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkSubtractDuotoneIcon = ({
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
        d="M8 2C5.79086 2 4 3.79087 4 6V20.0008C4 21.6842 5.95294 22.6146 7.26018 21.5538L11.3699 18.2191C11.7371 17.9211 12.2629 17.9211 12.6301 18.2191L16.7398 21.5538C18.047 22.6146 19.9999 21.6842 19.9999 20.0008V6C19.9999 3.79086 18.2091 2 15.9999 2H8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H10C9.44772 11 9 10.5523 9 10Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
