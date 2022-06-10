import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PercentDuotoneIcon = ({
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
        d="M18.6001 3.2C19.0419 3.53137 19.1314 4.15817 18.8001 4.6L6.80006 20.6C6.46869 21.0418 5.84189 21.1314 5.40006 20.8C4.95823 20.4686 4.86869 19.8418 5.20006 19.4L17.2001 3.4C17.5314 2.95817 18.1582 2.86863 18.6001 3.2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
