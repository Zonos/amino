import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.367 15.322a1 1 0 0 1-1.414 0l-4.95-4.95-4.95 4.95a1 1 0 0 1-1.414-1.414l5.587-5.586a1.1 1.1 0 0 1 1.555 0l5.586 5.586a1 1 0 0 1 0 1.415Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
