import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronDownWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.629 8.677a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.415l-5.586 5.586a1.1 1.1 0 0 1-1.556 0l-5.586-5.586a1 1 0 0 1 0-1.415Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
