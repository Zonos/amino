import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DollarIcon = ({ size, color, className }: IconProps) => {
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 7a1 1 0 1 1 2 0 3 3 0 0 1 3 3 1 1 0 1 1-2 0 1 1 0 0 0-1-1h-2.257a.743.743 0 0 0-.235 1.449l3.616 1.205A2.743 2.743 0 0 1 13.257 17H13a1 1 0 1 1-2 0 3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1h2.257a.743.743 0 0 0 .235-1.449l-3.616-1.205A2.744 2.744 0 0 1 10.743 7H11Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
