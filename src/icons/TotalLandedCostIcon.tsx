import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TotalLandedCostIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 3.887 8.804 9h6.392L12 3.887Zm-1.272-1.739a1.5 1.5 0 0 1 2.544 0l4.098 6.557A1.5 1.5 0 0 1 16.098 11H7.902A1.5 1.5 0 0 1 6.63 8.705l4.098-6.557ZM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm12-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Zm8 0h-6v6h6v-6Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
