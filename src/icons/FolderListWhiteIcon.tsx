import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderListWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.882a2.809 2.809 0 0 1-2.512-1.553A.81.81 0 0 0 9.882 6H5ZM2 7a3 3 0 0 1 3-3h4.882c1.064 0 2.037.601 2.512 1.553a.81.81 0 0 0 .724.447H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm5.99 4a1 1 0 0 1 1-1H9a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 11a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-4.01 4a1 1 0 0 1 1-1H9a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 15a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);