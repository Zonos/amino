import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EditDuotoneIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.07439 15.7352C3.77821 16.0314 3.5825 16.4131 3.51486 16.8265L3.01348 19.8904C2.90308 20.5651 3.48715 21.1492 4.16185 21.0388L7.2258 20.5374C7.63916 20.4698 8.02085 20.274 8.31703 19.9779L20.4665 7.82843C21.2475 7.04738 21.2475 5.78105 20.4665 5L19.0523 3.58579C18.2712 2.80474 17.0049 2.80474 16.2238 3.58579L4.07439 15.7352Z"
        fill="currentColor"
      />
      <path
        d="M5.61963 14.19L14.812 4.99759L19.0547 9.24023L9.86227 18.4326L5.61963 14.19Z"
        fill={secondaryColor || '#CACACE'}
      />
    </IconBase>
  );
};
