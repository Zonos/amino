import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HelpSolidIcon = ({ size, color, className }: IconProps) => {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.767-2.134a1 1 0 0 0 1.366-.365c.957-1.386 2.807.459 1.29 1.36a3.61 3.61 0 0 0-.9.763c-.257.313-.492.743-.52 1.272A1 1 0 0 0 11.998 14c.762 0 .907-.405 1.053-.814.094-.262.19-.527.45-.686.826-.506 1.499-1.402 1.5-2.5a3 3 0 0 0-5.599-1.5 1 1 0 0 0 .365 1.366ZM10.997 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
