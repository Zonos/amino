import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.568 8.507a1.1 1.1 0 0 1 1.556 0l4.879 4.879 4.88-4.88a1.1 1.1 0 1 1 1.555 1.556l-5.586 5.587a1.2 1.2 0 0 1-1.698 0l-5.586-5.587a1.1 1.1 0 0 1 0-1.555Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
