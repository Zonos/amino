import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ShoppingTagDuotoneIcon = ({
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
        d="M12.8286 3C12.033 3 11.2699 3.31607 10.7073 3.87868L3.59018 10.9958C2.80913 11.7768 2.80913 13.0432 3.59018 13.8242L10.176 20.41C10.957 21.1911 12.2234 21.191 13.0044 20.41L20.1215 13.2929C20.6841 12.7303 21.0002 11.9672 21.0002 11.1716V5C21.0002 3.89543 20.1048 3 19.0002 3H12.8286Z"
        fill="currentColor"
      />
      <path
        d="M15.4144 18.0002L6.00015 8.58594L4.58594 10.0002L14.0002 19.4144L15.4144 18.0002Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
