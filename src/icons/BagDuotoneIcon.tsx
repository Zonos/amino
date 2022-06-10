import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BagDuotoneIcon = ({
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
        d="M3.01516 11.3031C2.83568 9.53546 4.22312 8 5.99981 8H17.9997C19.7764 8 21.1639 9.53546 20.9844 11.3031L20.2736 18.3031C20.1181 19.8347 18.8285 21 17.289 21H6.71058C5.17107 21 3.88145 19.8347 3.72593 18.3031L3.01516 11.3031Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10V7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7V10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10V7Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
