import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkAddSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M4 6C4 3.79087 5.79086 2 8 2H15.9999C18.2091 2 19.9999 3.79086 19.9999 6V20.0008C19.9999 21.6842 18.047 22.6146 16.7398 21.5538L12.6301 18.2191C12.2629 17.9211 11.7371 17.9211 11.3699 18.2191L7.26018 21.5538C5.95294 22.6146 4 21.6842 4 20.0008V6ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V9H10C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H13V8Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
