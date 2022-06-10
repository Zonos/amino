import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BellSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.0615 20.4949C9.99334 20.2273 10.2236 20 10.4998 20H13.4998C13.7759 20 14.0062 20.2273 13.938 20.4949C13.7178 21.3601 12.9335 22 11.9998 22C11.066 22 10.2817 21.3601 10.0615 20.4949Z"
        fill="currentColor"
      />
      <path
        d="M13.0041 4H10.9954L9.96364 4.37114C7.5856 5.22659 5.99995 7.48212 5.99995 10.0093V11.3354C5.99995 12.0691 5.65495 12.7601 5.06849 13.2011C3.02112 14.7405 4.10981 18 6.67133 18H17.3285C19.89 18 20.9787 14.7405 18.9314 13.2011C18.3449 12.7602 18 12.0691 18 11.3354V10.0094C18 7.48215 16.4142 5.2266 14.0361 4.3712L13.0041 4Z"
        fill="currentColor"
      />
      <path
        d="M10.9998 3C10.9998 2.44772 11.4475 2 11.9998 2C12.552 2 12.9998 2.44772 12.9998 3V4H10.9998V3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
