import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const WarningSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M14.6834 4.65959C13.578 2.44779 10.4218 2.44778 9.31638 4.65956L3.31937 16.6588C2.32248 18.6535 3.77298 21 6.0029 21H17.9967C20.2266 21 21.6771 18.6535 20.6803 16.6589L14.6834 4.65959ZM10.9998 9C10.9998 8.44772 11.4475 8 11.9998 8C12.552 8 12.9998 8.44772 12.9998 9V13C12.9998 13.5523 12.552 14 11.9998 14C11.4475 14 10.9998 13.5523 10.9998 13V9ZM10.9998 16C10.9998 15.4477 11.4475 15 11.9998 15C12.552 15 12.9998 15.4477 12.9998 16C12.9998 16.5523 12.552 17 11.9998 17C11.4475 17 10.9998 16.5523 10.9998 16Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
