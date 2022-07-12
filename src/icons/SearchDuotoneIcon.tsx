import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const SearchDuotoneIcon = ({
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
        d="M12.793 12.793a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 0 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
      <path
        d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
