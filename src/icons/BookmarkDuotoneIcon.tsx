import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkDuotoneIcon = ({ size, color, className }: IconProps) => {
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
    </IconBase>
  );
};
