import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronRightIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.63298 18.435C9.02351 18.8255 9.65667 18.8255 10.0472 18.435L15.704 12.7781C16.0946 12.3876 16.0946 11.7545 15.704 11.3639L10.0472 5.70708C9.65667 5.31655 9.02351 5.31655 8.63298 5.70708C8.24246 6.0976 8.24246 6.73077 8.63298 7.12129L13.5827 12.071L8.63298 17.0208C8.24246 17.4113 8.24246 18.0445 8.63298 18.435Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
