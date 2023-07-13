import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BoxesIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.333 5a2 2 0 0 1 2-2h7.334a2 2 0 0 1 2 2v4.578H18a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.422a2 2 0 0 1 2-2h.333V5Zm2 4.578h7.334V5H13v.778a1 1 0 1 1-2 0V5H8.333v4.578Zm-2.333 2V19h12v-7.422h-5v2.2a1 1 0 1 1-2 0v-2.2H6Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
