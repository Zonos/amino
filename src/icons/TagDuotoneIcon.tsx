import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const TagDuotoneIcon = ({
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
        d="M12.829 3a3 3 0 0 0-2.122.879L3.59 10.996a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.828 0l7.118-7.117A3 3 0 0 0 21 11.172V5a2 2 0 0 0-2-2h-6.17Z"
        fill="currentColor"
      />
      <path
        d="M17 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
