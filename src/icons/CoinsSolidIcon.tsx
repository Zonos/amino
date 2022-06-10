import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CoinsSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M3 14.5C3 18.0899 5.91015 21 9.5 21C13.0899 21 16 18.0899 16 14.5C16 10.9101 13.0899 8 9.5 8C5.91015 8 3 10.9101 3 14.5Z"
        fill="currentColor"
      />
      <path
        d="M9.28987 5.61288C9.16806 5.7759 9.2965 6 9.5 6C14.1944 6 18 9.80558 18 14.5C18 14.7035 18.2241 14.8319 18.3871 14.7101C19.9732 13.5249 21 11.6323 21 9.5C21 5.91015 18.0899 3 14.5 3C12.3677 3 10.4751 4.02678 9.28987 5.61288Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
