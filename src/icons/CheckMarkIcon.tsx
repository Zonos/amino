import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CheckMarkIcon = ({ size, color, className }: IconProps) => {
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
        d="M19.2782 6.79289C19.6687 7.18342 19.6687 7.81658 19.2782 8.20711L10.3284 17.1569C9.9379 17.5474 9.30474 17.5474 8.91421 17.1569L4.79289 13.0355C4.40237 12.645 4.40237 12.0118 4.79289 11.6213C5.18342 11.2308 5.81658 11.2308 6.20711 11.6213L9.62132 15.0355L17.864 6.79289C18.2545 6.40237 18.8876 6.40237 19.2782 6.79289Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
