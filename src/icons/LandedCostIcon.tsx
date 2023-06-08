import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LandedCostIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.9 4.176A7.902 7.902 0 0 0 12 19.9a7.9 7.9 0 0 0 7.824-6.8H14.95c-.77 0-1.298-.61-1.357-1.25a1.6 1.6 0 0 0-1.444-1.443c-.639-.059-1.25-.588-1.25-1.357V4.176Zm.54-2.26c.945-.052 1.66.717 1.66 1.584v4.862a3.807 3.807 0 0 1 2.538 2.538H20.5c.867 0 1.636.715 1.585 1.66C21.793 17.878 17.39 22.1 12 22.1 6.422 22.1 1.9 17.578 1.9 12c0-5.39 4.222-9.793 9.54-10.085Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M14.425 4.818a1.1 1.1 0 0 1 1.48-.48 8.6 8.6 0 0 1 3.758 3.758 1.1 1.1 0 0 1-1.96.998 6.4 6.4 0 0 0-2.798-2.796 1.1 1.1 0 0 1-.48-1.48Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
