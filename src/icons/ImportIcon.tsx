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
        d="M20 10.9a1.1 1.1 0 0 1 1.1 1.1v6a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18v-6a1.1 1.1 0 0 1 2.2 0v6a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9v-6a1.1 1.1 0 0 1 1.1-1.1Zm-4.222 1.322a1.1 1.1 0 0 1 0 1.556l-2.646 2.646a1.6 1.6 0 0 1-2.263 0l-2.647-2.646a1.1 1.1 0 1 1 1.556-1.556l1.122 1.122V4a1.1 1.1 0 0 1 2.2 0v9.344l1.122-1.122a1.1 1.1 0 0 1 1.556 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
