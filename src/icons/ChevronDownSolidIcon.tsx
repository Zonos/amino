import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronDownSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M5.29289 8.63602C4.90237 9.02655 4.90237 9.65971 5.29289 10.0502L10.9497 15.7071C11.3403 16.0976 11.9734 16.0976 12.364 15.7071L18.0208 10.0502C18.4113 9.65971 18.4113 9.02655 18.0208 8.63602C17.6303 8.2455 16.9971 8.2455 16.6066 8.63602L11.6569 13.5858L6.70711 8.63602C6.31658 8.2455 5.68342 8.2455 5.29289 8.63602Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
