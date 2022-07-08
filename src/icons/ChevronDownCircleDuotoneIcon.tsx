import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronDownCircleDuotoneIcon = ({
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.293 10.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
