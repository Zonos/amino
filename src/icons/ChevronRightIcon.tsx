import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.677 18.364a1 1 0 0 1 0-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.415-1.414l5.586 5.586a1.1 1.1 0 0 1 0 1.556l-5.586 5.586a1 1 0 0 1-1.415 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
