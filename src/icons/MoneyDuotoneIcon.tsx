import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const MoneyDuotoneIcon = ({
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
        d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2V8.8Z"
        fill="currentColor"
      />
      <path
        d="M5 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm9 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z"
        fill={secondaryColor || '#3D3D42'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
};
