import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronRightDuotoneIcon = ({
  size,
  color,
  className,
}: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.63604 18.435C9.02656 18.8255 9.65973 18.8255 10.0503 18.435L15.7071 12.7782C16.0976 12.3876 16.0976 11.7545 15.7071 11.3639L10.0503 5.70709C9.65973 5.31657 9.02656 5.31656 8.63604 5.70709C8.24552 6.09761 8.24552 6.73078 8.63604 7.1213L13.5858 12.0711L8.63604 17.0208C8.24551 17.4113 8.24551 18.0445 8.63604 18.435Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
