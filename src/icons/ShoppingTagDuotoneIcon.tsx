import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ShoppingTagDuotoneIcon = ({
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
        d="M12.829 3a3 3 0 0 0-2.122.879L3.59 10.996a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.828 0l7.118-7.117A3 3 0 0 0 21 11.172V5a2 2 0 0 0-2-2h-6.17Z"
        fill="#CACACE"
      />
      <path
        d="M15.414 18 6 8.586 4.586 10 14 19.414 15.414 18ZM17 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
