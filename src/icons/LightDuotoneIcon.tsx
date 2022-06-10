import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LightDuotoneIcon = ({
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
        d="M16 16.9297C18.3912 15.5465 20 12.9611 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 12.9611 5.60879 15.5465 8 16.9297V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V16.9297Z"
        fill="currentColor"
      />
      <path
        d="M9 19H15V20C15 21.1046 14.1046 22 13 22H11C9.89543 22 9 21.1046 9 20V19Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M10.7071 10.2929C10.3166 9.90237 9.68342 9.90237 9.29289 10.2929C8.90237 10.6834 8.90237 11.3166 9.29289 11.7071L11 13.4142V19H13V13.4142L14.7071 11.7071C15.0976 11.3166 15.0976 10.6834 14.7071 10.2929C14.3166 9.90237 13.6834 9.90237 13.2929 10.2929L12 11.5858L10.7071 10.2929Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
