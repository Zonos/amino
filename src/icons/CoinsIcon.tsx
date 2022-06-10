import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CoinsIcon = ({ size, color, className }: IconProps) => {
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
        d="M15.858 15.8577C18.7963 15.2329 20.9999 12.6243 20.9999 9.5C20.9999 5.91015 18.0898 3 14.4999 3C11.3756 3 8.76694 5.20368 8.14214 8.14205C5.2041 8.76646 3 11.3758 3 14.5C3 18.0899 5.91015 21 9.5 21C12.6242 21 15.2336 18.7958 15.858 15.8577ZM18.9999 9.5C18.9999 7.01472 16.9852 5 14.4999 5C12.5252 5 10.8469 6.27249 10.2412 8.0418C13.2387 8.38206 15.6179 10.7612 15.9582 13.7587C17.7275 13.153 18.9999 11.4747 18.9999 9.5ZM14 14.5C14 12.0147 11.9853 10 9.5 10C7.01472 10 5 12.0147 5 14.5C5 16.9853 7.01472 19 9.5 19C11.9853 19 14 16.9853 14 14.5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
