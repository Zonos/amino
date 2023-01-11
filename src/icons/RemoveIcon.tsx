import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RemoveIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.722 6.722a1.1 1.1 0 0 1 1.556 0L12 10.444l3.722-3.722a1.1 1.1 0 1 1 1.556 1.556L13.556 12l3.722 3.722a1.1 1.1 0 1 1-1.556 1.556L12 13.556l-3.722 3.722a1.1 1.1 0 1 1-1.556-1.556L10.444 12 6.722 8.278a1.1 1.1 0 0 1 0-1.556Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
