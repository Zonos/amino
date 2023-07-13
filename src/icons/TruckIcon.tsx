import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TruckIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3h3.333a3 3 0 0 1 1.8.6l2.667 2A3 3 0 0 1 22 12v3a3 3 0 0 1-2.664 2.981A3.001 3.001 0 0 1 13.67 18h-3.342a3.001 3.001 0 0 1-5.665-.019A3 3 0 0 1 2 15V7Zm2.689 8.95a3.001 3.001 0 0 1 5.64.05H11V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 .689.95ZM13 16h.67a3.001 3.001 0 0 1 5.641-.05A1 1 0 0 0 20 15v-3a1 1 0 0 0-.4-.8l-2.667-2a1 1 0 0 0-.6-.2H13v7Zm-5.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
