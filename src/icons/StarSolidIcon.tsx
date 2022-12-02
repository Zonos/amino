import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarSolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.61 2.938c.504-1.252 2.276-1.252 2.781 0L15.33 7.74a.5.5 0 0 0 .423.312l4.866.397c1.32.107 1.862 1.747.868 2.621l-3.692 3.248a.5.5 0 0 0-.158.483l1.18 5.367c.296 1.34-1.216 2.34-2.334 1.544l-4.192-2.984a.5.5 0 0 0-.58 0L7.52 21.712c-1.118.796-2.63-.204-2.335-1.544l1.18-5.367a.5.5 0 0 0-.157-.483L2.514 11.07c-.994-.874-.45-2.514.869-2.621l4.866-.397a.5.5 0 0 0 .423-.312l1.937-4.802Z"
      />
    </IconBase>
  )
);
