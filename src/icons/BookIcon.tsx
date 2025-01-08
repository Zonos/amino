import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12.75 7.248v9.88a9.72 9.72 0 0 1 6.75 0v-9.88a9.05 9.05 0 0 0-6.75 0m-1.5 9.88v-9.88a9.05 9.05 0 0 0-6.75 0v9.88a9.72 9.72 0 0 1 6.75 0M12 5.935l.006-.002a10.55 10.55 0 0 1 8.238 0c.459.194.756.644.756 1.141v10.499c0 .858-.876 1.438-1.666 1.103a8.22 8.22 0 0 0-6.418 0l-.916.389-.916-.389a8.22 8.22 0 0 0-6.418 0A1.198 1.198 0 0 1 3 17.573V7.074c0-.497.298-.947.756-1.141a10.55 10.55 0 0 1 8.238 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
