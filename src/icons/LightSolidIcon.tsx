import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LightSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M9 20.5C9 20.2239 9.22386 20 9.5 20H14.5C14.7761 20 15 20.2239 15 20.5V21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V20.5Z"
        fill="currentColor"
      />
      <path
        d="M16 16.9297C18.3912 15.5465 20 12.9611 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 12.9611 5.60879 15.5465 8 16.9297V17C8 17.5523 8.44772 18 9 18H10.5C10.7761 18 11 17.7761 11 17.5V13.4142L9.29289 11.7071C8.90237 11.3166 8.90237 10.6834 9.29289 10.2929C9.68342 9.90237 10.3166 9.90237 10.7071 10.2929L12 11.5858L13.2929 10.2929C13.6834 9.90237 14.3166 9.90237 14.7071 10.2929C15.0976 10.6834 15.0976 11.3166 14.7071 11.7071L13 13.4142V17.5C13 17.7761 13.2239 18 13.5 18H15C15.5523 18 16 17.5523 16 17V16.9297Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
