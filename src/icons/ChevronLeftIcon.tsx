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
        d="M15.493 5.565a1.1 1.1 0 0 1 0 1.556L10.614 12l4.88 4.88a1.1 1.1 0 0 1-1.556 1.555L8.35 12.849a1.2 1.2 0 0 1 0-1.697l5.587-5.587a1.1 1.1 0 0 1 1.555 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
