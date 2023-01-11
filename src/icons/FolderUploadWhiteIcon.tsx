import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FolderUploadWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4.882c1.064 0 2.037.601 2.512 1.553a.81.81 0 0 0 .724.447H19a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V9a1 1 0 0 0-1-1h-5.882a2.809 2.809 0 0 1-2.512-1.553A.81.81 0 0 0 9.882 6H5Zm15 11.414.293.293a1 1 0 0 0 1.414-1.414l-1.646-1.647a1.5 1.5 0 0 0-2.122 0l-1.646 1.647a1 1 0 0 0 1.414 1.414l.293-.293V21a1 1 0 1 0 2 0v-3.586Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
