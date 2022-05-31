import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

export const CoinsIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.858 15.8577C18.7963 15.2329 20.9999 12.6243 20.9999 9.5C20.9999 5.91015 18.0898 3 14.4999 3C11.3756 3 8.76694 5.20368 8.14214 8.14205C5.2041 8.76646 3 11.3758 3 14.5C3 18.0899 5.91015 21 9.5 21C12.6242 21 15.2336 18.7958 15.858 15.8577ZM18.9999 9.5C18.9999 7.01472 16.9852 5 14.4999 5C12.5252 5 10.8469 6.27249 10.2412 8.0418C13.2387 8.38206 15.6179 10.7612 15.9582 13.7587C17.7275 13.153 18.9999 11.4747 18.9999 9.5ZM14 14.5C14 12.0147 11.9853 10 9.5 10C7.01472 10 5 12.0147 5 14.5C5 16.9853 7.01472 19 9.5 19C11.9853 19 14 16.9853 14 14.5Z"
      fill="currentColor"
    />
  </IconBase>
);

export const CoinsSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
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

export const CoinsDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8 9.5C8 13.0899 10.9101 16 14.5 16C18.0899 16 21 13.0899 21 9.5C21 5.91015 18.0899 3 14.5 3C10.9101 3 8 5.91015 8 9.5Z"
      fill="currentColor"
    />
    <path
      d="M3 14.5C3 18.0899 5.91015 21 9.5 21C13.0899 21 16 18.0899 16 14.5C16 10.9101 13.0899 8 9.5 8C5.91015 8 3 10.9101 3 14.5Z"
      fill="#3D3D40"
    />
  </IconBase>
);
