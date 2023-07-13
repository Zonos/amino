import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TrashCanIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a1 1 0 0 1 0-2h3V4Zm2 2h4V4h-4v2ZM7 8v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H7Zm3 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
