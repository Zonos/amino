import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GridIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M2.9 5c0-1.16.94-2.1 2.1-2.1h4c1.16 0 2.1.94 2.1 2.1v4A2.1 2.1 0 0 1 9 11.1H5A2.1 2.1 0 0 1 2.9 9V5Zm2.2.1v3.8h3.8V5.1H5.1Zm7.8-.1c0-1.16.94-2.1 2.1-2.1h4c1.16 0 2.1.94 2.1 2.1v4a2.1 2.1 0 0 1-2.1 2.1h-4A2.1 2.1 0 0 1 12.9 9V5Zm2.2.1v3.8h3.8V5.1h-3.8ZM2.9 15c0-1.16.94-2.1 2.1-2.1h4c1.16 0 2.1.94 2.1 2.1v4A2.1 2.1 0 0 1 9 21.1H5A2.1 2.1 0 0 1 2.9 19v-4Zm2.2.1v3.8h3.8v-3.8H5.1Zm7.8-.1c0-1.16.94-2.1 2.1-2.1h4c1.16 0 2.1.94 2.1 2.1v4a2.1 2.1 0 0 1-2.1 2.1h-4a2.1 2.1 0 0 1-2.1-2.1v-4Zm2.2.1v3.8h3.8v-3.8h-3.8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
