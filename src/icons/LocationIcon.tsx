import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LocationIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a7 7 0 0 0-7 7c0 1.7 1.18 3.563 2.799 5.268C9.35 17.9 11.122 19.198 12 19.8c.878-.602 2.65-1.899 4.201-3.532C17.821 14.563 19 12.7 19 11a7 7 0 0 0-7-7Zm-9 7a9 9 0 0 1 18 0c0 2.522-1.672 4.88-3.349 6.645-1.718 1.809-3.653 3.213-4.566 3.837a1.92 1.92 0 0 1-2.17 0c-.913-.624-2.848-2.028-4.566-3.837C4.672 15.88 3 13.522 3 11Zm7-1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
