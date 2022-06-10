import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkCheckDuotoneIcon = ({
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
        d="M15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L11.7071 12.7071C11.3166 13.0976 10.6834 13.0976 10.2929 12.7071L8.29289 10.7071C7.90237 10.3166 7.90237 9.68342 8.29289 9.29289C8.68342 8.90237 9.31658 8.90237 9.70711 9.29289L11 10.5858L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
