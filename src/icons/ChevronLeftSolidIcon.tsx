import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronLeftSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.364 5.70711C14.9734 5.31658 14.3403 5.31658 13.9497 5.70711L8.29289 11.364C7.90237 11.7545 7.90237 12.3877 8.29289 12.7782L13.9497 18.435C14.3403 18.8256 14.9734 18.8256 15.364 18.435C15.7545 18.0445 15.7545 17.4113 15.364 17.0208L10.4142 12.0711L15.364 7.12132C15.7545 6.7308 15.7545 6.09763 15.364 5.70711Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
