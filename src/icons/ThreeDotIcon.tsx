import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ThreeDotIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3.9 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm6 0a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm6 0a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
