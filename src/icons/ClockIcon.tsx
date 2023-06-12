import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClockIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1ZM12 5.9A1.1 1.1 0 0 1 13.1 7v3.9H15a1.1 1.1 0 0 1 0 2.2h-2.5a1.6 1.6 0 0 1-1.6-1.6V7A1.1 1.1 0 0 1 12 5.9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
