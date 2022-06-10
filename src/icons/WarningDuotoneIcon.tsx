import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const WarningDuotoneIcon = ({
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
        d="M9.31638 4.65952C10.4218 2.44773 13.578 2.44774 14.6834 4.65954L20.6803 16.6588C21.6771 18.6535 20.2266 21 17.9967 21H6.0029C3.77298 21 2.32248 18.6535 3.31937 16.6588L9.31638 4.65952Z"
        fill="currentColor"
      />
      <path
        d="M12 8C11.4477 8 11 8.44772 11 9V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V9C13 8.44772 12.5523 8 12 8Z"
        fill={secondaryColor || '#3D3D42'}
      />
      <path
        d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
