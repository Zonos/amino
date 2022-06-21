import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const UserSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M9 14a5 5 0 0 0-5 5 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 5 5 0 0 0-5-5H9Zm3-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
