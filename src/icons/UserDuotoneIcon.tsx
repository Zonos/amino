import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const UserDuotoneIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 19a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5 3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
        fill="currentColor"
      />
      <path
        d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
