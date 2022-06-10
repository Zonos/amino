import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CartDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5H4.36039C4.83707 5 5.24749 5.33646 5.34097 5.80389L6.85864 13.3922C7.04561 14.3271 7.86644 15 8.8198 15H17.7056C18.6359 15 19.4434 14.3585 19.6537 13.4523L20.9568 7.83919C21.1751 6.89877 20.4611 6 19.4956 6H7.4198L7.30213 5.41165C7.02168 4.00938 5.79044 3 4.36039 3H4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
