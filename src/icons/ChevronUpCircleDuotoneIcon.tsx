import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpCircleDuotoneIcon = ({
  size,
  color,
  className,
}: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        fill="#CACACE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 9.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
