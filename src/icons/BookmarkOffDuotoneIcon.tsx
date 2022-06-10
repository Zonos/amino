import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkOffDuotoneIcon = ({
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
        d="M19.9999 18.5857L4.6556 3.24133L4.17153 4.83842C4.05974 5.20723 4 5.59752 4 5.99995V20.0007C4 21.6842 5.95294 22.6145 7.26018 21.5538L11.3699 18.219C11.7371 17.9211 12.2629 17.9211 12.6301 18.219L16.7398 21.5538C18.047 22.6145 19.9999 21.6842 19.9999 20.0007V18.5857Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3C8 2.44772 8.44772 2 9 2H15.9999C18.2091 2 19.9999 3.79086 19.9999 6V13C19.9999 13.5523 19.5522 14 18.9999 14C18.4477 14 17.9999 13.5523 17.9999 13V6C17.9999 4.89543 17.1045 4 15.9999 4H9C8.44772 4 8 3.55228 8 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
