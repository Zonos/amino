import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronLeftDuotoneIcon = ({
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
        d="M15.364 5.70708C14.9734 5.31655 14.3403 5.31655 13.9497 5.70708L8.29289 11.3639C7.90237 11.7545 7.90237 12.3876 8.29289 12.7781L13.9497 18.435C14.3403 18.8255 14.9734 18.8255 15.364 18.435C15.7545 18.0445 15.7545 17.4113 15.364 17.0208L10.4142 12.071L15.364 7.12129C15.7545 6.73077 15.7545 6.0976 15.364 5.70708Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
