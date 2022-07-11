import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LikeDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        className={className}
        viewBox="0 0 24 24"
      >
        <rect x="4" y="9" width="2" height="11" rx="1" fill="#3D3D42" />
        <path
          d="M10.38 4.403c.192-.254.496-.403.818-.403h2.153c.564 0 1.02.448 1.02 1v2.364c0 .552.457 1 1.021 1h2.566c1.228 0 2.177 1.053 2.026 2.246l-.967 7.636C18.89 19.248 18.02 20 16.99 20H9.04C7.914 20 7 19.105 7 18v-7.693c0-.325.04-.648.12-.964l.05-.199c.131-.515.365-1 .689-1.425l2.52-3.316Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
