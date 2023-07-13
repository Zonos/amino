import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.322 5.636a1 1 0 0 1 0 1.414L10.372 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.586-5.586a1.1 1.1 0 0 1 0-1.556l5.586-5.586a1 1 0 0 1 1.415 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
