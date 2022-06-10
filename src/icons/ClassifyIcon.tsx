import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ClassifyIcon = ({ size, color, className }: IconProps) => {
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
        d="M12 5.94118L4.63006 19H19.3699L12 5.94118ZM11.2039 4.53053L11.2032 4.52941L11.2039 4.53053ZM12.8963 3.52941C12.498 2.82353 11.502 2.82353 11.1037 3.52941L2.14021 19.4118C1.74183 20.1176 2.2398 21 3.03655 21H20.9634C21.7602 21 22.2582 20.1176 21.8598 19.4118L12.8963 3.52941Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
