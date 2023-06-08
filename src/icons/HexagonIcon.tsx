import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HexagonIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M21.875 10.45a3.1 3.1 0 0 1 0 3.1l-3.595 6.227a3.1 3.1 0 0 1-2.685 1.55h-7.19a3.1 3.1 0 0 1-2.685-1.55L2.125 13.55a3.1 3.1 0 0 1 0-3.1L5.72 4.223a3.1 3.1 0 0 1 2.685-1.55h7.19a3.1 3.1 0 0 1 2.685 1.55l3.595 6.227Zm-1.905 2a.9.9 0 0 0 0-.9l-3.595-6.227a.9.9 0 0 0-.78-.45h-7.19a.9.9 0 0 0-.78.45L4.03 11.55a.9.9 0 0 0 0 .9l3.595 6.227a.9.9 0 0 0 .78.45h7.19a.9.9 0 0 0 .78-.45l3.595-6.227Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
