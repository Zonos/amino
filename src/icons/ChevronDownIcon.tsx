import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronDownIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M5.29289 8.63605C4.90237 9.02657 4.90237 9.65974 5.29289 10.0503L10.9497 15.7071C11.3403 16.0976 11.9734 16.0976 12.364 15.7071L18.0208 10.0503C18.4113 9.65974 18.4113 9.02657 18.0208 8.63605C17.6303 8.24552 16.9971 8.24552 16.6066 8.63605L11.6569 13.5858L6.70711 8.63605C6.31658 8.24552 5.68342 8.24552 5.29289 8.63605Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
