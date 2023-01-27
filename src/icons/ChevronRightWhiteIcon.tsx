import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronRightWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.677 18.364a1 1 0 0 1 0-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.415-1.414l5.586 5.586a1.1 1.1 0 0 1 0 1.556l-5.586 5.586a1 1 0 0 1-1.415 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
