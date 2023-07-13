import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10-8c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.293 1.707a1 1 0 0 1-1.414 0L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l2.646-2.647a1.5 1.5 0 0 1 2.122 0l2.646 2.647a1 1 0 0 1 0 1.414Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
