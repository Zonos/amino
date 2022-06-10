import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkCheckSolidIcon = ({
  size,
  color,
  className,
}: IconProps) => {
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
        d="M4 6C4 3.79087 5.79086 2 8 2H15.9999C18.2091 2 19.9999 3.79086 19.9999 6V20.0008C19.9999 21.6842 18.047 22.6146 16.7398 21.5538L12.6301 18.2191C12.2629 17.9211 11.7371 17.9211 11.3699 18.2191L7.26018 21.5538C5.95294 22.6146 4 21.6842 4 20.0008V6ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L10.2929 12.7071C10.6834 13.0976 11.3166 13.0976 11.7071 12.7071L15.7071 8.70711Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
