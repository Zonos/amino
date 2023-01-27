import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.507 18.435a1.1 1.1 0 0 1 0-1.556L13.386 12l-4.88-4.879a1.1 1.1 0 0 1 1.556-1.556l5.587 5.587a1.2 1.2 0 0 1 0 1.697l-5.587 5.586a1.1 1.1 0 0 1-1.555 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
