import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowUpDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.29274 10.1213C7.90222 10.5118 7.26905 10.5118 6.87853 10.1213C6.488 9.7308 6.488 9.09763 6.87853 8.70711L11.2927 4.29289C11.6833 3.90237 12.3164 3.90237 12.707 4.29289L17.1212 8.70711C17.5117 9.09763 17.5117 9.7308 17.1212 10.1213C16.7306 10.5118 16.0975 10.5118 15.707 10.1213L12.9998 7.41421L12.9998 19C12.9998 19.5523 12.5521 20 11.9998 20C11.4476 20 10.9998 19.5523 10.9998 19L10.9998 7.41421L8.29274 10.1213Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
