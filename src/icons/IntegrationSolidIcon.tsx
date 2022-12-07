import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const IntegrationSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        fillRule="evenodd"
        d="M8 6a4 4 0 1 1 7.969.5h1.508a3 3 0 0 1 3 2.976l.023 2.917a1 1 0 0 1-1.5.874 2 2 0 1 0 0 3.466 1 1 0 0 1 1.5.866v1.9a3 3 0 0 1-3 3.001h-11a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h1.531A4.03 4.03 0 0 1 8 6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
