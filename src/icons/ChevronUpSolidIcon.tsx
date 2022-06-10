import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M17.7071 15.364C18.0976 14.9734 18.0976 14.3403 17.7071 13.9497L12.0503 8.29289C11.6597 7.90237 11.0266 7.90237 10.636 8.29289L4.97918 13.9497C4.58866 14.3403 4.58866 14.9734 4.97918 15.364C5.36971 15.7545 6.00287 15.7545 6.3934 15.364L11.3431 10.4142L16.2929 15.364C16.6834 15.7545 17.3166 15.7545 17.7071 15.364Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
