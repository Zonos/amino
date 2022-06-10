import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const RemoveIcon = ({ size, color, className }: IconProps) => {
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
        d="M6.17156 6.17162C6.56208 5.78109 7.19524 5.78109 7.58577 6.17162L12 10.5858L16.4142 6.17162C16.8047 5.78109 17.4379 5.78109 17.8284 6.17162C18.2189 6.56214 18.2189 7.19531 17.8284 7.58583L13.4142 12L17.8284 16.4143C18.2189 16.8048 18.2189 17.4379 17.8284 17.8285C17.4379 18.219 16.8047 18.219 16.4142 17.8285L12 13.4143L7.58577 17.8285C7.19524 18.219 6.56208 18.219 6.17156 17.8285C5.78103 17.4379 5.78103 16.8048 6.17156 16.4143L10.5858 12L6.17156 7.58583C5.78103 7.19531 5.78103 6.56214 6.17156 6.17162Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
