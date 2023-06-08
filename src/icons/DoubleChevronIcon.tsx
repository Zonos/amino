import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DoubleChevronIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.778 14.222a1.1 1.1 0 0 1 0 1.556l-3.93 3.93a1.2 1.2 0 0 1-1.696 0l-3.93-3.93a1.1 1.1 0 1 1 1.556-1.556L12 17.444l3.222-3.222a1.1 1.1 0 0 1 1.556 0Zm0-4.444a1.1 1.1 0 0 1-1.556 0L12 6.556 8.778 9.778a1.1 1.1 0 1 1-1.556-1.556l3.93-3.93a1.2 1.2 0 0 1 1.697 0l3.929 3.93a1.1 1.1 0 0 1 0 1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
