import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BellOffIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M10 20h4a2 2 0 1 1-4 0Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.876 6.876A5.972 5.972 0 0 0 6 10v1.957c0 .431-.156.847-.439 1.172l-.644.74C2.83 16.261 4.53 20 7.707 20h8.587a3.63 3.63 0 0 0 2.623-1.083l-1.416-1.416a1.669 1.669 0 0 1-1.207.499H7.706c-1.46 0-2.24-1.718-1.282-2.818l.645-.739c.6-.689.931-1.572.931-2.486V10c0-.587.126-1.144.354-1.646L6.876 6.876Z"
        fill="currentColor"
      />
      <path
        d="M12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 0 2h1a4 4 0 0 1 4 4v1a1 1 0 1 0 2 0v-1a6.002 6.002 0 0 0-5.003-5.918C12.999 4.055 13 4.028 13 4V3a1 1 0 0 0-1-1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
