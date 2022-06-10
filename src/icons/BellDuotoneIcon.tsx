import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BellDuotoneIcon = ({
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
        d="M10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z"
        fill="currentColor"
      />
      <path
        d="M13.0041 4H10.9954L9.96899 4.36922C7.58774 5.22582 5.99995 7.48439 5.99995 10.015V13.3354C5.99995 14.0691 5.65495 14.7601 5.06849 15.2011C3.02112 16.7405 4.10981 20 6.67133 20H17.3285C19.89 20 20.9787 16.7405 18.9314 15.2011C18.3449 14.7602 18 14.0691 18 13.3354V10.0151C18 7.48444 16.4121 5.22582 14.0307 4.36927L13.0041 4Z"
        fill={secondaryColor || '#CACACE'}
      />
      <path
        d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V4H11V3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
