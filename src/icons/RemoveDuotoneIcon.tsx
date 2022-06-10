import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const RemoveDuotoneIcon = ({ size, color, className }: IconProps) => {
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
        d="M6.1718 6.17162C6.56232 5.78109 7.19549 5.78109 7.58601 6.17162L12.0002 10.5858L16.4144 6.17162C16.805 5.78109 17.4381 5.78109 17.8287 6.17162C18.2192 6.56214 18.2192 7.19531 17.8287 7.58583L13.4144 12L17.8287 16.4143C18.2192 16.8048 18.2192 17.4379 17.8287 17.8285C17.4381 18.219 16.805 18.219 16.4144 17.8285L12.0002 13.4143L7.58601 17.8285C7.19549 18.219 6.56232 18.219 6.1718 17.8285C5.78128 17.4379 5.78128 16.8048 6.1718 16.4143L10.586 12L6.1718 7.58583C5.78128 7.19531 5.78128 6.56214 6.1718 6.17162Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
