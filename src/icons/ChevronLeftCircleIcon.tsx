import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronLeftCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M19.9 12a7.9 7.9 0 1 0-15.8 0 7.9 7.9 0 0 0 15.8 0ZM12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1C1.9 6.422 6.422 1.9 12 1.9Zm1.778 6.322a1.1 1.1 0 0 1 0 1.556L11.556 12l2.222 2.222a1.1 1.1 0 1 1-1.556 1.556L9.576 13.13a1.6 1.6 0 0 1 0-2.262l2.646-2.647a1.1 1.1 0 0 1 1.556 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
