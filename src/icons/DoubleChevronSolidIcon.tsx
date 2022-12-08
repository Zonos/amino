import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DoubleChevronSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.327 9.828a.966.966 0 0 0 1.386 0 1.014 1.014 0 0 0 0-1.414l-5.02-5.121a.97.97 0 0 0-1.386 0l-5.02 5.121a1.014 1.014 0 0 0 0 1.414.966.966 0 0 0 1.386 0L12 5.414l4.327 4.414Zm-8.654 4.344a.966.966 0 0 0-1.386 0 1.014 1.014 0 0 0 0 1.414l5.02 5.121a.97.97 0 0 0 1.386 0l5.02-5.121a1.014 1.014 0 0 0 0-1.414.966.966 0 0 0-1.386 0L12 18.586l-4.327-4.414Z"
      />
    </IconBase>
  )
);
