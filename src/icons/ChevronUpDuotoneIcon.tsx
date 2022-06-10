import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M18.7071 15.364C19.0976 14.9734 19.0976 14.3403 18.7071 13.9497L13.0503 8.29289C12.6597 7.90237 12.0266 7.90237 11.636 8.29289L5.97918 13.9497C5.58866 14.3403 5.58866 14.9734 5.97918 15.364C6.36971 15.7545 7.00287 15.7545 7.3934 15.364L12.3431 10.4142L17.2929 15.364C17.6834 15.7545 18.3166 15.7545 18.7071 15.364Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
