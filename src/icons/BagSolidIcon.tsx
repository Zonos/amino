import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BagSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M3.01516 11.3031C2.83568 9.53546 4.22312 8 5.99981 8H7.99978V10C7.99978 10.5523 8.44749 11 8.99978 11C9.55206 11 9.99978 10.5523 9.99978 10V8H13.9998V10C13.9998 10.5523 14.4475 11 14.9998 11C15.5521 11 15.9998 10.5523 15.9998 10V8H17.9997C19.7764 8 21.1639 9.53546 20.9844 11.3031L20.2736 18.3031C20.1181 19.8347 18.8285 21 17.289 21H6.71058C5.17107 21 3.88145 19.8347 3.72593 18.3031L3.01516 11.3031Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8H14V7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7V8H8V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
