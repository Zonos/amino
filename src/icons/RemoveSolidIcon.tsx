import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const RemoveSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M6.172 6.172a1 1 0 0 1 1.414 0L12 10.586l4.414-4.414a1 1 0 0 1 1.415 1.414L13.414 12l4.415 4.414a1 1 0 0 1-1.415 1.414L12 13.414l-4.414 4.414a1 1 0 0 1-1.414-1.414L10.586 12 6.172 7.586a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
