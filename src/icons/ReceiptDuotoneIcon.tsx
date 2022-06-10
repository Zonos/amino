import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ReceiptDuotoneIcon = ({
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
        d="M5 4H19V20.5C19 20.8568 18.637 21.0988 18.3077 20.9615L16.3202 20.1334C16.1128 20.047 15.8823 20.0329 15.666 20.0935L12.8089 20.8935C12.2798 21.0417 11.7202 21.0417 11.1911 20.8935L8.33404 20.0935C8.11767 20.0329 7.8872 20.047 7.6798 20.1334L5.69231 20.9615C5.36296 21.0988 5 20.8568 5 20.5V4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H11C11.5523 11 12 10.5523 12 10C12 9.44772 11.5523 9 11 9H9ZM15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9ZM8 14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14C12 14.5523 11.5523 15 11 15H9C8.44772 15 8 14.5523 8 14ZM15 13C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H4C3.44772 5 3 4.55228 3 4Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
