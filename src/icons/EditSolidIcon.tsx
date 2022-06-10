import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EditSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M13.3978 6.41178L7.03387 12.7757L11.2765 17.0184L17.6405 10.6544L13.3978 6.41178Z"
        fill="currentColor"
      />
      <path
        d="M19.0547 9.24021L20.4665 7.82842C21.2475 7.04738 21.2475 5.78105 20.4665 5L19.0523 3.58578C18.2712 2.80473 17.0049 2.80473 16.2238 3.58578L14.812 4.99757L19.0547 9.24021Z"
        fill="currentColor"
      />
      <path
        d="M9.8623 18.4326L5.61966 14.19L4.07439 15.7352C3.77821 16.0314 3.5825 16.4131 3.51486 16.8265L3.01348 19.8904C2.90308 20.5651 3.48715 21.1492 4.16185 21.0388L7.2258 20.5374C7.63916 20.4698 8.02085 20.274 8.31703 19.9779L9.8623 18.4326Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
