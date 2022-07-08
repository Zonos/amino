import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EyeDuotoneIcon = ({
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
        d="M12 4c-6.108 0-8.86 4.788-9.73 6.74a3.088 3.088 0 0 0 0 2.52C3.14 15.212 5.892 20 12 20c6.11 0 8.861-4.788 9.73-6.74a3.088 3.088 0 0 0 0-2.52C20.861 8.788 18.11 4 12 4Z"
        fill="currentColor"
      />
      <path
        d="M10 12a2 2 0 0 0 1.739-2.989A3 3 0 1 1 9.01 11.74c.292.166.63.261.989.261Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
