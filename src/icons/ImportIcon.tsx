import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ImportIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M20 11a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a1 1 0 1 1 2 0v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1Zm-4.293 1.293a1 1 0 0 1 0 1.414l-2.646 2.647a1.5 1.5 0 0 1-2.122 0l-2.646-2.647a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 1 1 2 0v9.586l1.293-1.293a1 1 0 0 1 1.414 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
