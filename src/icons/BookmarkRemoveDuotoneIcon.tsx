import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkRemoveDuotoneIcon = ({
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
        d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L12 8.58579L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L13.4142 10L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L12 11.4142L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L10.5858 10L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
